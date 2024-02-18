window.onload = function() {

	// кружение меркурия
		function mercur() {
			let go = true;
			let x0 = 925,
			y0 = 1845,
			R = 140,
			A = 1,
			mercury = document.getElementById('mercury');
			function mermove() {
				if (go) {
					PI2 = Math.PI * 2;
					mdA = PI2 / 1000;
					setInterval(function() {
						mercury.style.left = Math.round(x0 + R * Math.cos(A)) + 'px';
						mercury.style.top = Math.round(y0 + R * Math.sin(A)) + 'px';
						A += mdA;
						if (A >= PI2)
							A -= PI2;
						else if (A < 0)
							A += PI2;
					}, 40); } } 
			mercury.onmouseover = function(){
				go = false;
				mdA = 0; }
			mercury.onmouseout = function(){
				go = true;
				mdA = PI2 / 1000; }
			mermove();
		}

		// кружение венеры
		function vener() {
			let go = true;
			let x0 = 925,
			y0 = 1845,
			R = 200,
			A = 2,
			hesperus = document.getElementById('hesperus');
			function venmove() {
				if (go) {
					PI2 = Math.PI * 2;
					vdA = PI2 / 1100;
					setInterval(function() {
						hesperus.style.left = Math.round(x0 + R * Math.cos(A)) + 'px';
						hesperus.style.top = Math.round(y0 + R * Math.sin(A)) + 'px';
						A += vdA;
						if (A >= PI2)
							A -= PI2;
						else if (A < 0)
							A += PI2;
					}, 40); } }
			hesperus.onmouseover = function(){
				go = false;
				vdA = 0; }
			hesperus.onmouseout = function(){
				go = true;
				vdA = PI2 / 1100; }
			venmove();
		}

		// кружение земли
		function zemla() {
			let go = true;
			let x0 = 925,
			y0 = 1845,
			R = 280,
			A = 3,
			terra = document.getElementById('terra');
			function zemmove() {
				if (go) {
					PI2 = Math.PI * 2;
					zdA = PI2 / 1300;
					setInterval(function() {
						terra.style.left = Math.round(x0 + R * Math.cos(A)) + 'px';
						terra.style.top = Math.round(y0 + R * Math.sin(A)) + 'px';
						A += zdA;
						if (A >= PI2)
							A -= PI2;
						else if (A < 0)
							A += PI2;
					}, 40); } }
			terra.onmouseover = function(){
				go = false;
				zdA = 0; }
			terra.onmouseout = function(){
				go = true;
				zdA = PI2 / 1300; }
			zemmove();
		}

		// кружение марса
		function marsf() {
			let go = true;
			let x0 = 925,
			y0 = 1845,
			R = 370,
			A = 3,
			mars = document.getElementById('mars');
			function marmove() {
				if (go) {
					PI2 = Math.PI * 2;
					mardA = PI2 / 1500;
					setInterval(function() {
						mars.style.left = Math.round(x0 + R * Math.cos(A)) + 'px';
						mars.style.top = Math.round(y0 + R * Math.sin(A)) + 'px';
						A += mardA;
						if (A >= PI2)
							A -= PI2;
						else if (A < 0)
							A += PI2;
					}, 40); } }
			mars.onmouseover = function(){
				go = false;
				mardA = 0; }
			mars.onmouseout = function(){
				go = true;
				mardA = PI2 / 1500; }
			marmove();
		}

		// кружение юпитера
		function jupit() {
			let go = true;
			let x0 = 925,
			y0 = 1845,
			R = 450,
			A = 4,
			jupiter = document.getElementById('jupiter');
			function jupmove() {
				if (go) {
					PI2 = Math.PI * 2;
					jdA = PI2 / 1700;
					setInterval(function() {
						jupiter.style.left = Math.round(x0 + R * Math.cos(A)) + 'px';
						jupiter.style.top = Math.round(y0 + R * Math.sin(A)) + 'px';
						A += jdA;
						if (A >= PI2)
							A -= PI2;
						else if (A < 0)
							A += PI2;
					}, 40); } }
			jupiter.onmouseover = function(){
				go = false;
				jdA = 0; }
			jupiter.onmouseout = function(){
				go = true;
				jdA = PI2 / 1700; }
			jupmove();
		}

		// кружение сатурна
		function satu() {
			let go = true;
			let x0 = 925,
			y0 = 1845,
			R = 570,
			A = 5,
			saturn = document.getElementById('saturn');
			function satmove() {
				if (go) {
					PI2 = Math.PI * 2;
					satdA = PI2 / 2000;
					setInterval(function() {
						saturn.style.left = Math.round(x0 + R * Math.cos(A)) + 'px';
						saturn.style.top = Math.round(y0 + R * Math.sin(A)) + 'px';
						A += satdA;
						if (A >= PI2)
							A -= PI2;
						else if (A < 0)
							A += PI2;
					}, 40); } }
			saturn.onmouseover = function(){
				go = false;
				satdA = 0; }
			saturn.onmouseout = function(){
				go = true;
				satdA = PI2 / 2000; }
			satmove();
		}

		// кружение урана
		function uran() {
			let go = true;
			let x0 = 925,
			y0 = 1845,
			R = 750,
			A = 6,
			uranus = document.getElementById('uranus');
			function uramove() {
				if (go) {
					PI2 = Math.PI * 2;
					urdA = PI2 / 2200;
					setInterval(function() {
						uranus.style.left = Math.round(x0 + R * Math.cos(A)) + 'px';
						uranus.style.top = Math.round(y0 + R * Math.sin(A)) + 'px';
						A += urdA;
						if (A >= PI2)
							A -= PI2;
						else if (A < 0)
							A += PI2;
					}, 40); } }
			uranus.onmouseover = function(){
				go = false;
				urdA = 0; }
			uranus.onmouseout = function(){
				go = true;
				urdA = PI2 / 2200; }
			uramove();
		}

		// кружение нептуна
		function nept() {
			let go = true;
			let x0 = 925,
			y0 = 1845,
			R = 850,
			A = 0,
			neptune = document.getElementById('neptune');
			function nepmove() {
				if (go) {
					PI2 = Math.PI * 2;
					nepdA = PI2 / 2400;
					setInterval(function() {
						neptune.style.left = Math.round(x0 + R * Math.cos(A)) + 'px';
						neptune.style.top = Math.round(y0 + R * Math.sin(A)) + 'px';
						A += nepdA;
						if (A >= PI2)
							A -= PI2;
						else if (A < 0)
							A += PI2;
					}, 40); } }
			neptune.onmouseover = function(){
				go = false;
				nepdA = 0; }
			neptune.onmouseout = function(){
				go = true;
				nepdA = PI2 / 2200; }
			nepmove();
		}

	mercur();
	vener();
	zemla();
	marsf();
	jupit();
	satu();
	uran();
	nept();
}