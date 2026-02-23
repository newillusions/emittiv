<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	// Simplex noise (2D) — compact implementation
	const GRAD = [
		[1, 1],
		[-1, 1],
		[1, -1],
		[-1, -1],
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1]
	];
	const PERM = new Uint8Array(512);
	(() => {
		const p = new Uint8Array(256);
		for (let i = 0; i < 256; i++) p[i] = i;
		for (let i = 255; i > 0; i--) {
			const j = (Math.random() * (i + 1)) | 0;
			[p[i], p[j]] = [p[j], p[i]];
		}
		for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
	})();

	function noise2d(x: number, y: number): number {
		const F2 = 0.5 * (Math.sqrt(3) - 1);
		const G2 = (3 - Math.sqrt(3)) / 6;
		const s = (x + y) * F2;
		const i = Math.floor(x + s);
		const j = Math.floor(y + s);
		const t = (i + j) * G2;
		const x0 = x - (i - t);
		const y0 = y - (j - t);
		const i1 = x0 > y0 ? 1 : 0;
		const j1 = x0 > y0 ? 0 : 1;
		const x1 = x0 - i1 + G2;
		const y1 = y0 - j1 + G2;
		const x2 = x0 - 1 + 2 * G2;
		const y2 = y0 - 1 + 2 * G2;
		const ii = i & 255;
		const jj = j & 255;
		let n0 = 0,
			n1 = 0,
			n2 = 0;
		let t0 = 0.5 - x0 * x0 - y0 * y0;
		if (t0 > 0) {
			t0 *= t0;
			const g = GRAD[PERM[ii + PERM[jj]] % 8];
			n0 = t0 * t0 * (g[0] * x0 + g[1] * y0);
		}
		let t1 = 0.5 - x1 * x1 - y1 * y1;
		if (t1 > 0) {
			t1 *= t1;
			const g = GRAD[PERM[ii + i1 + PERM[jj + j1]] % 8];
			n1 = t1 * t1 * (g[0] * x1 + g[1] * y1);
		}
		let t2 = 0.5 - x2 * x2 - y2 * y2;
		if (t2 > 0) {
			t2 *= t2;
			const g = GRAD[PERM[ii + 1 + PERM[jj + 1]] % 8];
			n2 = t2 * t2 * (g[0] * x2 + g[1] * y2);
		}
		return 70 * (n0 + n1 + n2);
	}

	interface Blob {
		x: number;
		y: number;
		r: number;
		color: string;
		noiseOffsetX: number;
		noiseOffsetY: number;
		speed: number;
	}

	interface Node {
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		grey: number;
	}

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let w = 0;
		let h = 0;
		let animId: number;
		let time = 0;
		const isMobile = window.innerWidth < 768;
		const nodeCount = isMobile ? 30 : 55;
		const connectionDist = isMobile ? 120 : 150;

		function resize() {
			const dpr = Math.min(window.devicePixelRatio, 2);
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx!.scale(dpr, dpr);
		}

		let resizeTimer: ReturnType<typeof setTimeout>;
		function debouncedResize() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(resize, 150);
		}

		resize();
		window.addEventListener('resize', debouncedResize);

		// Blob layer: organic shapes
		const blobs: Blob[] = [
			{
				x: 0.2,
				y: 0.3,
				r: 0.25,
				color: 'rgba(90, 90, 90, 0.18)',
				noiseOffsetX: 0,
				noiseOffsetY: 100,
				speed: 0.0005
			},
			{
				x: 0.7,
				y: 0.6,
				r: 0.3,
				color: 'rgba(60, 60, 60, 0.14)',
				noiseOffsetX: 200,
				noiseOffsetY: 300,
				speed: 0.0004
			},
			{
				x: 0.5,
				y: 0.4,
				r: 0.22,
				color: 'rgba(110, 110, 110, 0.10)',
				noiseOffsetX: 400,
				noiseOffsetY: 500,
				speed: 0.0006
			},
			{
				x: 0.8,
				y: 0.2,
				r: 0.2,
				color: 'rgba(75, 75, 75, 0.16)',
				noiseOffsetX: 600,
				noiseOffsetY: 700,
				speed: 0.00045
			},
			{
				x: 0.3,
				y: 0.7,
				r: 0.28,
				color: 'rgba(50, 50, 50, 0.14)',
				noiseOffsetX: 800,
				noiseOffsetY: 900,
				speed: 0.0005
			}
		];

		// Node layer: connected particles
		const nodes: Node[] = [];
		for (let i = 0; i < nodeCount; i++) {
			const speed = 0.15 + Math.random() * 0.55;
			const angle = Math.random() * Math.PI * 2;
			nodes.push({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				size: 1 + Math.random() * 3.5,
				grey: 120 + Math.floor(Math.random() * 100)
			});
		}

		function drawBlobs() {
			for (const blob of blobs) {
				const nx = noise2d(blob.noiseOffsetX + time * blob.speed, 0) * 0.15;
				const ny = noise2d(0, blob.noiseOffsetY + time * blob.speed) * 0.15;
				const cx = (blob.x + nx) * w;
				const cy = (blob.y + ny) * h;
				const r = blob.r * Math.max(w, h);

				const gradient = ctx!.createRadialGradient(cx, cy, 0, cx, cy, r);
				gradient.addColorStop(0, blob.color);
				gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

				ctx!.fillStyle = gradient;
				ctx!.beginPath();
				ctx!.arc(cx, cy, r, 0, Math.PI * 2);
				ctx!.fill();
			}
		}

		function drawNodes() {
			// Update positions
			for (const node of nodes) {
				node.x += node.vx;
				node.y += node.vy;

				if (node.x < 0 || node.x > w) node.vx *= -1;
				if (node.y < 0 || node.y > h) node.vy *= -1;

				node.x = Math.max(0, Math.min(w, node.x));
				node.y = Math.max(0, Math.min(h, node.y));
			}

			// Calculate connectedness per node (0 = isolated, 1 = strongly connected)
			const connectedness = new Float32Array(nodes.length);
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = nodes[i].x - nodes[j].x;
					const dy = nodes[i].y - nodes[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < connectionDist) {
						const strength = 1 - dist / connectionDist;
						connectedness[i] = Math.min(1, connectedness[i] + strength);
						connectedness[j] = Math.min(1, connectedness[j] + strength);
					}
				}
			}

			// Draw connections
			ctx!.lineWidth = 1;
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = nodes[i].x - nodes[j].x;
					const dy = nodes[i].y - nodes[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < connectionDist) {
						const opacity = (1 - dist / connectionDist) * 0.3;
						ctx!.strokeStyle = `rgba(255, 153, 0, ${opacity})`;
						ctx!.beginPath();
						ctx!.moveTo(nodes[i].x, nodes[i].y);
						ctx!.lineTo(nodes[j].x, nodes[j].y);
						ctx!.stroke();
					}
				}
			}

			// Draw dots — orange when connected, grey when isolated
			for (let i = 0; i < nodes.length; i++) {
				const node = nodes[i];
				const c = connectedness[i];
				const r = Math.round(node.grey + (255 - node.grey) * c);
				const g = Math.round(node.grey + (153 - node.grey) * c);
				const b = Math.round(node.grey * (1 - c));
				const alpha = 0.15 + (node.size / 4.5) * 0.2;
				ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
				ctx!.beginPath();
				ctx!.arc(node.x, node.y, node.size, 0, Math.PI * 2);
				ctx!.fill();
			}
		}

		function animate() {
			time++;
			ctx!.clearRect(0, 0, w, h);
			drawBlobs();
			drawNodes();
			animId = requestAnimationFrame(animate);
		}

		animId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animId);
			clearTimeout(resizeTimer);
			window.removeEventListener('resize', debouncedResize);
		};
	});
</script>

<canvas bind:this={canvas} class="hero-canvas" aria-hidden="true"></canvas>

<style>
	.hero-canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
	}
</style>
