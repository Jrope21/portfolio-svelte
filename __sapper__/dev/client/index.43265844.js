import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, e as element, c as claim_element, a as children, b as detach_dev, f as attr_dev, g as add_location, h as insert_dev, j as append_dev, n as noop, t as text, k as space, l as claim_text, m as claim_space, p as create_component, q as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, T as TextAnimation, y as query_selector_all } from './client.3d1ca0fc.js';
import { P as Projects } from './Projects.10541749.js';

/* src/components/home-components/hero/HeroImg.svelte generated by Svelte v3.29.4 */
const file = "src/components/home-components/hero/HeroImg.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "hero-image svelte-1gnlcqp");
			add_location(div0, file, 107, 4, 3139);
			attr_dev(div1, "class", "box svelte-1gnlcqp");
			add_location(div1, file, 106, 0, 3117);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("HeroImg", slots, []);
	let heroImg;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HeroImg> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ onMount, heroImg });

	$$self.$inject_state = $$props => {
		if ("heroImg" in $$props) heroImg = $$props.heroImg;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [];
}

class HeroImg extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "HeroImg",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/home-components/hero/HeroText.svelte generated by Svelte v3.29.4 */

const file$1 = "src/components/home-components/hero/HeroText.svelte";

function create_fragment$1(ctx) {
	let h1;
	let t0;
	let t1;
	let h2;
	let t2;
	let t3;
	let h3;
	let t4;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Front End Developer");
			t1 = space();
			h2 = element("h2");
			t2 = text("React, Svelte, ES6");
			t3 = space();
			h3 = element("h3");
			t4 = text("Joshua Roper");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Front End Developer");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, "React, Svelte, ES6");
			h2_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t4 = claim_text(h3_nodes, "Joshua Roper");
			h3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-74umf8");
			add_location(h1, file$1, 112, 0, 2742);
			attr_dev(h2, "class", "svelte-74umf8");
			add_location(h2, file$1, 113, 0, 2771);
			attr_dev(h3, "class", "svelte-74umf8");
			add_location(h3, file$1, 114, 0, 2799);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t4);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(h3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("HeroText", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HeroText> was created with unknown prop '${key}'`);
	});

	return [];
}

class HeroText extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "HeroText",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/components/home-components/hero/Hero.svelte generated by Svelte v3.29.4 */
const file$2 = "src/components/home-components/hero/Hero.svelte";

function create_fragment$2(ctx) {
	let div2;
	let div0;
	let heroimg;
	let t;
	let div1;
	let herotext;
	let current;
	heroimg = new HeroImg({ $$inline: true });
	herotext = new HeroText({ $$inline: true });

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			create_component(heroimg.$$.fragment);
			t = space();
			div1 = element("div");
			create_component(herotext.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(heroimg.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(herotext.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "hero svelte-kc3yj4");
			add_location(div0, file$2, 95, 4, 2654);
			attr_dev(div1, "class", "text svelte-kc3yj4");
			add_location(div1, file$2, 98, 4, 2708);
			attr_dev(div2, "class", "hero-container svelte-kc3yj4");
			add_location(div2, file$2, 94, 0, 2621);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			mount_component(heroimg, div0, null);
			append_dev(div2, t);
			append_dev(div2, div1);
			mount_component(herotext, div1, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(heroimg.$$.fragment, local);
			transition_in(herotext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(heroimg.$$.fragment, local);
			transition_out(herotext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(heroimg);
			destroy_component(herotext);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Hero", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Hero> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ onMount, HeroImg, HeroText });
	return [];
}

class Hero extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Hero",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/components/home-components/text-with-image-cta/TextWithImageCta.svelte generated by Svelte v3.29.4 */
const file$3 = "src/components/home-components/text-with-image-cta/TextWithImageCta.svelte";

function create_fragment$3(ctx) {
	let section;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div1;
	let h2;
	let t1;
	let t2;
	let h3;
	let t3;
	let t4;
	let p;
	let t5;
	let t6;
	let a;
	let textanimation;
	let current;

	textanimation = new TextAnimation({
			props: { text: `Get In Touch` },
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h2 = element("h2");
			t1 = text("Let's Create Something Awesome Together.");
			t2 = space();
			h3 = element("h3");
			t3 = text("Front End Developer | Desk Enthusiast");
			t4 = space();
			p = element("p");
			t5 = text("Lorem ipsum orem ipsum dolor sit amet, consectetur adipiscing elit. Sem purus libero proin elit, consectetur vitae ut purus. Eu diam aliquam justo nam eget. Sollicitudin pharetra, quisque placerat vulputate. Vitae vestibulum tristique commodo aliquet suspendisse leo morbi velit tellus.");
			t6 = space();
			a = element("a");
			create_component(textanimation.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Let's Create Something Awesome Together.");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			h3 = claim_element(div1_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t3 = claim_text(h3_nodes, "Front End Developer | Desk Enthusiast");
			h3_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, "Lorem ipsum orem ipsum dolor sit amet, consectetur adipiscing elit. Sem purus libero proin elit, consectetur vitae ut purus. Eu diam aliquam justo nam eget. Sollicitudin pharetra, quisque placerat vulputate. Vitae vestibulum tristique commodo aliquet suspendisse leo morbi velit tellus.");
			p_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			a = claim_element(div1_nodes, "A", { class: true, rel: true, href: true });
			var a_nodes = children(a);
			claim_component(textanimation.$$.fragment, a_nodes);
			a_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "thumbnails/halcyon-5-min.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "testing");
			attr_dev(img, "class", "svelte-b9igi2");
			add_location(img, file$3, 180, 8, 4705);
			attr_dev(div0, "class", "image-container svelte-b9igi2");
			add_location(div0, file$3, 179, 4, 4667);
			attr_dev(h2, "class", "heading svelte-b9igi2");
			add_location(h2, file$3, 183, 8, 4810);
			attr_dev(h3, "class", "subheading svelte-b9igi2");
			add_location(h3, file$3, 184, 8, 4884);
			attr_dev(p, "class", "svelte-b9igi2");
			add_location(p, file$3, 185, 8, 4958);
			attr_dev(a, "class", "button svelte-b9igi2");
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", "");
			add_location(a, file$3, 191, 8, 5562);
			attr_dev(div1, "class", "text-content svelte-b9igi2");
			add_location(div1, file$3, 182, 4, 4775);
			attr_dev(section, "class", "text-with-image-cta svelte-b9igi2");
			add_location(section, file$3, 178, 0, 4625);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, img);
			append_dev(section, t0);
			append_dev(section, div1);
			append_dev(div1, h2);
			append_dev(h2, t1);
			append_dev(div1, t2);
			append_dev(div1, h3);
			append_dev(h3, t3);
			append_dev(div1, t4);
			append_dev(div1, p);
			append_dev(p, t5);
			append_dev(div1, t6);
			append_dev(div1, a);
			mount_component(textanimation, a, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(textanimation.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textanimation.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(textanimation);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("TextWithImageCta", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TextWithImageCta> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ TextAnimation });
	return [];
}

class TextWithImageCta extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TextWithImageCta",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.29.4 */
const file$4 = "src/routes/index.svelte";

function create_fragment$4(ctx) {
	let t0;
	let div;
	let hero;
	let t1;
	let textwithimagecta;
	let t2;
	let projects;
	let current;
	hero = new Hero({ $$inline: true });
	textwithimagecta = new TextWithImageCta({ $$inline: true });

	projects = new Projects({
			props: {
				portfolioCards: /*portfolioCards*/ ctx[0],
				title: "Selected Works"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			create_component(hero.$$.fragment);
			t1 = space();
			create_component(textwithimagecta.$$.fragment);
			t2 = space();
			create_component(projects.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1lmiyik\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(hero.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(textwithimagecta.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			claim_component(projects.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Home | Front End Developer - Joshua Roper";
			attr_dev(div, "class", "container svelte-10dobqu");
			add_location(div, file$4, 39, 0, 1692);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(hero, div, null);
			append_dev(div, t1);
			mount_component(textwithimagecta, div, null);
			append_dev(div, t2);
			mount_component(projects, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(hero.$$.fragment, local);
			transition_in(textwithimagecta.$$.fragment, local);
			transition_in(projects.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(hero.$$.fragment, local);
			transition_out(textwithimagecta.$$.fragment, local);
			transition_out(projects.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_component(hero);
			destroy_component(textwithimagecta);
			destroy_component(projects);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);

	let portfolioCards = [
		{
			url: "/projects/halcyon",
			imgSrc: "thumbnails/halcyon-5-min.jpg",
			alt: "Thumbnail for the Halcyon mall website rebuild",
			projectName: "Halcyon",
			projectYear: "2019",
			projectText: `I was one of the Front End Developers on the project primarily tasked with creating the movies page and events directory. Across the project I worked with <strong>multiple API’s</strong>, <strong>React Static</strong>, and developed <strong>clean code</strong> for other advanced React components.`
		},
		{
			url: "/projects/di-repairs",
			imgSrc: "thumbnails/di-thumb.jpg",
			alt: "Thumbnail for the City of University Park complete Front End website redesign",
			projectName: "DI Repairs",
			projectYear: "2020",
			projectText: `As the <strong>only developer & designer</strong> on this freelance project. I completely re-envisioned the site design & built the project from the ground up as an extremely performant <strong>SSG website</strong>. I utilized development & design best practices with a focus on the <strong>user experience.</strong>`
		}
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Hero,
		Projects,
		TextWithImageCta,
		portfolioCards
	});

	$$self.$inject_state = $$props => {
		if ("portfolioCards" in $$props) $$invalidate(0, portfolioCards = $$props.portfolioCards);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [portfolioCards];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$4.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDMyNjU4NDQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9oZXJvL0hlcm9JbWcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xubGV0IGhlcm9JbWc7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gICAgQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2dsb2JhbC52YXJpYWJsZXMuc2Nzcyc7XG5cbiAgICAuaGVyby1pbWFnZXtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDQyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi90aHVtYm5haWxzL3Byb2Zlc3Npb25hbC1oZXJvLW1pbi5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDI1JTtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggbGlnaHRncmV5O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAuMDFzIGVhc2UtaW47XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IGJyZWFrcG9pbnQoc20pKSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC03MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDEwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogYnJlYWtwb2ludChtZCkpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTkwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IGJyZWFrcG9pbnQobGcpKSB7XG4gICAgICAgICAgICB3aWR0aDogNDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IGJyZWFrcG9pbnQoc20pKSB7XG4gICAgICAgIC5ib3gge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB3aWR0aDogMjM3cHg7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGhlaWdodDogNDExcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IGJyZWFrcG9pbnQobWQpKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1NXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjE2cHg7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogYnJlYWtwb2ludChsZykpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDk3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4NjIuNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cImhlcm8taW1hZ2VcIiA+PC9kaXY+XG48L2Rpdj4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS1jb21wb25lbnRzL2hlcm8vSGVyby5zdmVsdGUnO1xuICAgIGltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0cy5zdmVsdGUnO1xuICAgIGltcG9ydCBUZXh0V2l0aEltYWdlQ3RhIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS1jb21wb25lbnRzL3RleHQtd2l0aC1pbWFnZS1jdGEvVGV4dFdpdGhJbWFnZUN0YS5zdmVsdGUnO1xuXG4gICAgbGV0IHBvcnRmb2xpb0NhcmRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6ICcvcHJvamVjdHMvaGFsY3lvbicsXG4gICAgICAgICAgICBpbWdTcmM6ICd0aHVtYm5haWxzL2hhbGN5b24tNS1taW4uanBnJyxcbiAgICAgICAgICAgIGFsdDogJ1RodW1ibmFpbCBmb3IgdGhlIEhhbGN5b24gbWFsbCB3ZWJzaXRlIHJlYnVpbGQnLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdIYWxjeW9uJyxcbiAgICAgICAgICAgIHByb2plY3RZZWFyOiAnMjAxOScsXG4gICAgICAgICAgICBwcm9qZWN0VGV4dDogYEkgd2FzIG9uZSBvZiB0aGUgRnJvbnQgRW5kIERldmVsb3BlcnMgb24gdGhlIHByb2plY3QgcHJpbWFyaWx5IHRhc2tlZCB3aXRoIGNyZWF0aW5nIHRoZSBtb3ZpZXMgcGFnZSBhbmQgZXZlbnRzIGRpcmVjdG9yeS4gQWNyb3NzIHRoZSBwcm9qZWN0IEkgd29ya2VkIHdpdGggPHN0cm9uZz5tdWx0aXBsZSBBUEnigJlzPC9zdHJvbmc+LCA8c3Ryb25nPlJlYWN0IFN0YXRpYzwvc3Ryb25nPiwgYW5kIGRldmVsb3BlZCA8c3Ryb25nPmNsZWFuIGNvZGU8L3N0cm9uZz4gZm9yIG90aGVyIGFkdmFuY2VkIFJlYWN0IGNvbXBvbmVudHMuYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6ICcvcHJvamVjdHMvZGktcmVwYWlycycsXG4gICAgICAgICAgICBpbWdTcmM6ICd0aHVtYm5haWxzL2RpLXRodW1iLmpwZycsXG4gICAgICAgICAgICBhbHQ6ICdUaHVtYm5haWwgZm9yIHRoZSBDaXR5IG9mIFVuaXZlcnNpdHkgUGFyayBjb21wbGV0ZSBGcm9udCBFbmQgd2Vic2l0ZSByZWRlc2lnbicsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0RJIFJlcGFpcnMnLFxuICAgICAgICAgICAgcHJvamVjdFllYXI6ICcyMDIwJyxcbiAgICAgICAgICAgIHByb2plY3RUZXh0OiBgQXMgdGhlIDxzdHJvbmc+b25seSBkZXZlbG9wZXIgJiBkZXNpZ25lcjwvc3Ryb25nPiBvbiB0aGlzIGZyZWVsYW5jZSBwcm9qZWN0LiBJIGNvbXBsZXRlbHkgcmUtZW52aXNpb25lZCB0aGUgc2l0ZSBkZXNpZ24gJiBidWlsdCB0aGUgcHJvamVjdCBmcm9tIHRoZSBncm91bmQgdXAgYXMgYW4gZXh0cmVtZWx5IHBlcmZvcm1hbnQgPHN0cm9uZz5TU0cgd2Vic2l0ZTwvc3Ryb25nPi4gSSB1dGlsaXplZCBkZXZlbG9wbWVudCAmIGRlc2lnbiBiZXN0IHByYWN0aWNlcyB3aXRoIGEgZm9jdXMgb24gdGhlIDxzdHJvbmc+dXNlciBleHBlcmllbmNlLjwvc3Ryb25nPmAsXG4gICAgICAgIH0sICAgICAgICBcbiAgICBdXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkhvbWUgfCBGcm9udCBFbmQgRGV2ZWxvcGVyIC0gSm9zaHVhIFJvcGVyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxIZXJvIC8+XG4gICAgPFRleHRXaXRoSW1hZ2VDdGEgLz5cbiAgICA8UHJvamVjdHMgcG9ydGZvbGlvQ2FyZHM9e3BvcnRmb2xpb0NhcmRzfSB0aXRsZT17J1NlbGVjdGVkIFdvcmtzJ30gLz5cbiAgICBcbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVJLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0N3Q21CLEdBQWM7V0FBUyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBckM3RCxjQUFjOztHQUVWLEdBQUcsRUFBRSxtQkFBbUI7R0FDeEIsTUFBTSxFQUFFLDhCQUE4QjtHQUN0QyxHQUFHLEVBQUUsZ0RBQWdEO0dBQ3JELFdBQVcsRUFBRSxTQUFTO0dBQ3RCLFdBQVcsRUFBRSxNQUFNO0dBQ25CLFdBQVc7OztHQUdYLEdBQUcsRUFBRSxzQkFBc0I7R0FDM0IsTUFBTSxFQUFFLHlCQUF5QjtHQUNqQyxHQUFHLEVBQUUsK0VBQStFO0dBQ3BGLFdBQVcsRUFBRSxZQUFZO0dBQ3pCLFdBQVcsRUFBRSxNQUFNO0dBQ25CLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
