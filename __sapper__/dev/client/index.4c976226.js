import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, a as space, c as claim_element, b as children, d as detach, f as claim_text, g as attr, h as add_location, j as insert, k as append, n as noop, t as text, z as mount_component, u as transition_in, x as transition_out, A as destroy_component, M as HtmlTag, I as set_data, C as group_outros, D as check_outros, N as destroy_each } from './index.0199b3b0.js';
import { T as TextAnimation } from './TextAnimation.0dd8326f.js';
import { I as Image } from './Image.dbbadb76.js';

/* src/components/hero/HeroImg.svelte generated by Svelte v3.9.1 */

const file = "src/components/hero/HeroImg.svelte";

function create_fragment(ctx) {
	var img, t, div1, div0;

	return {
		c: function create() {
			img = element("img");
			t = space();
			div1 = element("div");
			div0 = element("div");
			this.h();
		},

		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { width: true, height: true, src: true, alt: true, class: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			t = claim_text(nodes, "\n");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(img, "width", "1px");
			attr(img, "height", "1px");
			attr(img, "src", "images/hero-doe.png");
			attr(img, "alt", "A picture of Joshua Roper leaning against a wall.");
			attr(img, "class", "svelte-rziffi");
			add_location(img, file, 81, 0, 1743);
			attr(div0, "class", "hero-image svelte-rziffi");
			add_location(div0, file, 83, 4, 1879);
			attr(div1, "class", "box svelte-rziffi");
			add_location(div1, file, 82, 0, 1857);
		},

		m: function mount(target, anchor) {
			insert(target, img, anchor);
			insert(target, t, anchor);
			insert(target, div1, anchor);
			append(div1, div0);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(img);
				detach(t);
				detach(div1);
			}
		}
	};
}

function instance($$self) {

	return {};
}

class HeroImg extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

/* src/components/hero/HeroText.svelte generated by Svelte v3.9.1 */

const file$1 = "src/components/hero/HeroText.svelte";

function create_fragment$1(ctx) {
	var h1, t0, t1, h2, t2, t3, h3, t4;

	return {
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
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Front End Developer");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "React, Svelte, ES6");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n");

			h3 = claim_element(nodes, "H3", { class: true }, false);
			var h3_nodes = children(h3);

			t4 = claim_text(h3_nodes, "Joshua Roper");
			h3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h1, "class", "svelte-q1dgpq");
			add_location(h1, file$1, 79, 0, 1153);
			attr(h2, "class", "svelte-q1dgpq");
			add_location(h2, file$1, 80, 0, 1182);
			attr(h3, "class", "svelte-q1dgpq");
			add_location(h3, file$1, 81, 0, 1210);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, h3, anchor);
			append(h3, t4);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t3);
				detach(h3);
			}
		}
	};
}

class HeroText extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, []);
	}
}

/* src/components/hero/Hero.svelte generated by Svelte v3.9.1 */

const file$2 = "src/components/hero/Hero.svelte";

function create_fragment$2(ctx) {
	var div2, div0, t, div1, current;

	var heroimg = new HeroImg({ $$inline: true });

	var herotext = new HeroText({ $$inline: true });

	return {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			heroimg.$$.fragment.c();
			t = space();
			div1 = element("div");
			herotext.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			heroimg.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t = claim_text(div2_nodes, "\n    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			herotext.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div0, "class", "hero svelte-gyswp7");
			add_location(div0, file$2, 64, 4, 954);
			attr(div1, "class", "text svelte-gyswp7");
			add_location(div1, file$2, 67, 4, 1008);
			attr(div2, "class", "hero-container svelte-gyswp7");
			add_location(div2, file$2, 63, 0, 921);
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			mount_component(heroimg, div0, null);
			append(div2, t);
			append(div2, div1);
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
			if (detaching) {
				detach(div2);
			}

			destroy_component(heroimg);

			destroy_component(herotext);
		}
	};
}

class Hero extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$2, safe_not_equal, []);
	}
}

/* src/components/projects/Text.svelte generated by Svelte v3.9.1 */

const file$3 = "src/components/projects/Text.svelte";

function create_fragment$3(ctx) {
	var div, h2, t0, t1, p, span, t2, t3, html_tag, t4, a, current;

	var textanimation = new TextAnimation({
		props: { text: `View Website` },
		$$inline: true
	});

	return {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text(ctx.projectName);
			t1 = space();
			p = element("p");
			span = element("span");
			t2 = text(ctx.projectYear);
			t3 = space();
			t4 = space();
			a = element("a");
			textanimation.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			h2 = claim_element(div_nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t0 = claim_text(h2_nodes, ctx.projectName);
			h2_nodes.forEach(detach);
			t1 = claim_text(div_nodes, "\n    ");

			p = claim_element(div_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			span = claim_element(p_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t2 = claim_text(span_nodes, ctx.projectYear);
			span_nodes.forEach(detach);
			t3 = claim_text(p_nodes, "\n        ");
			p_nodes.forEach(detach);
			t4 = claim_text(div_nodes, "\n    ");

			a = claim_element(div_nodes, "A", { target: true, href: true, class: true }, false);
			var a_nodes = children(a);

			textanimation.$$.fragment.l(a_nodes);
			a_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h2, "class", "svelte-1jek2ir");
			add_location(h2, file$3, 81, 4, 1576);
			attr(span, "class", "year svelte-1jek2ir");
			add_location(span, file$3, 83, 8, 1615);
			html_tag = new HtmlTag(ctx.projectText, null);
			attr(p, "class", "svelte-1jek2ir");
			add_location(p, file$3, 82, 4, 1603);
			attr(a, "target", "blank");
			attr(a, "href", ctx.url);
			attr(a, "class", "svelte-1jek2ir");
			add_location(a, file$3, 86, 4, 1696);
			add_location(div, file$3, 80, 0, 1566);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, h2);
			append(h2, t0);
			append(div, t1);
			append(div, p);
			append(p, span);
			append(span, t2);
			append(p, t3);
			html_tag.m(p);
			append(div, t4);
			append(div, a);
			mount_component(textanimation, a, null);
			current = true;
		},

		p: function update(changed, ctx) {
			if (!current || changed.projectName) {
				set_data(t0, ctx.projectName);
			}

			if (!current || changed.projectYear) {
				set_data(t2, ctx.projectYear);
			}

			if (!current || changed.projectText) {
				html_tag.p(ctx.projectText);
			}

			if (!current || changed.url) {
				attr(a, "href", ctx.url);
			}
		},

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
			if (detaching) {
				detach(div);
			}

			destroy_component(textanimation);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { projectName, url, projectText, projectYear } = $$props;

	const writable_props = ['projectName', 'url', 'projectText', 'projectYear'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Text> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('projectName' in $$props) $$invalidate('projectName', projectName = $$props.projectName);
		if ('url' in $$props) $$invalidate('url', url = $$props.url);
		if ('projectText' in $$props) $$invalidate('projectText', projectText = $$props.projectText);
		if ('projectYear' in $$props) $$invalidate('projectYear', projectYear = $$props.projectYear);
	};

	return {
		projectName,
		url,
		projectText,
		projectYear
	};
}

class Text extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$3, safe_not_equal, ["projectName", "url", "projectText", "projectYear"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.projectName === undefined && !('projectName' in props)) {
			console.warn("<Text> was created without expected prop 'projectName'");
		}
		if (ctx.url === undefined && !('url' in props)) {
			console.warn("<Text> was created without expected prop 'url'");
		}
		if (ctx.projectText === undefined && !('projectText' in props)) {
			console.warn("<Text> was created without expected prop 'projectText'");
		}
		if (ctx.projectYear === undefined && !('projectYear' in props)) {
			console.warn("<Text> was created without expected prop 'projectYear'");
		}
	}

	get projectName() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectName(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get url() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set url(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get projectText() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectText(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get projectYear() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectYear(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/projects/Projects.svelte generated by Svelte v3.9.1 */

const file$4 = "src/components/projects/Projects.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.card = list[i];
	child_ctx.index = i;
	return child_ctx;
}

// (133:8) {#each portfolioCards as card, index}
function create_each_block(ctx) {
	var div2, div0, t0, div1, t1, current;

	var image = new Image({
		props: {
		imgSrc: ctx.card.imgSrc,
		url: ctx.card.url,
		alt: ctx.card.alt
	},
		$$inline: true
	});

	var text_1 = new Text({
		props: {
		projectName: ctx.card.projectName,
		url: ctx.card.url,
		projectText: ctx.card.projectText,
		projectYear: ctx.card.projectYear
	},
		$$inline: true
	});

	return {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			image.$$.fragment.c();
			t0 = space();
			div1 = element("div");
			text_1.$$.fragment.c();
			t1 = space();
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, index: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			image.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t0 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			text_1.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n            ");
			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div0, "class", "image-container svelte-1w3h4qb");
			add_location(div0, file$4, 134, 16, 4335);
			attr(div1, "class", "text-container svelte-1w3h4qb");
			add_location(div1, file$4, 137, 16, 4485);
			attr(div2, "class", "card-container svelte-1w3h4qb");
			attr(div2, "index", ctx.index);
			add_location(div2, file$4, 133, 12, 4282);
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			mount_component(image, div0, null);
			append(div2, t0);
			append(div2, div1);
			mount_component(text_1, div1, null);
			append(div2, t1);
			current = true;
		},

		p: function update(changed, ctx) {
			var image_changes = {};
			if (changed.portfolioCards) image_changes.imgSrc = ctx.card.imgSrc;
			if (changed.portfolioCards) image_changes.url = ctx.card.url;
			if (changed.portfolioCards) image_changes.alt = ctx.card.alt;
			image.$set(image_changes);

			var text_1_changes = {};
			if (changed.portfolioCards) text_1_changes.projectName = ctx.card.projectName;
			if (changed.portfolioCards) text_1_changes.url = ctx.card.url;
			if (changed.portfolioCards) text_1_changes.projectText = ctx.card.projectText;
			if (changed.portfolioCards) text_1_changes.projectYear = ctx.card.projectYear;
			text_1.$set(text_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);

			transition_in(text_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(image.$$.fragment, local);
			transition_out(text_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div2);
			}

			destroy_component(image);

			destroy_component(text_1);
		}
	};
}

function create_fragment$4(ctx) {
	var section, h2, t0, t1, div, current;

	var each_value = ctx.portfolioCards;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Selected Works");
			t1 = space();
			div = element("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			h2 = claim_element(section_nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t0 = claim_text(h2_nodes, "Selected Works");
			h2_nodes.forEach(detach);
			t1 = claim_text(section_nodes, "\n    ");

			div = claim_element(section_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h2, "class", "svelte-1w3h4qb");
			add_location(h2, file$4, 130, 4, 4163);
			attr(div, "class", "projects-container svelte-1w3h4qb");
			add_location(div, file$4, 131, 4, 4191);
			attr(section, "class", "svelte-1w3h4qb");
			add_location(section, file$4, 129, 0, 4149);
		},

		m: function mount(target, anchor) {
			insert(target, section, anchor);
			append(section, h2);
			append(h2, t0);
			append(section, t1);
			append(section, div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.portfolioCards) {
				each_value = ctx.portfolioCards;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();
				for (i = each_value.length; i < each_blocks.length; i += 1) out(i);
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);

			current = true;
		},

		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(section);
			}

			destroy_each(each_blocks, detaching);
		}
	};
}

function instance$2($$self) {
	  

    let portfolioCards = [
        {
            url: '/projects/halcyon',
            imgSrc: 'images/halcyon-5.jpg',
            alt: 'Thumbnail for the Halcyon mall website rebuild',
            projectName: 'Halcyon',
            projectYear: '2019',
            projectText: `I was one of the Front End Developers on the project primarily tasked with creating the movies page and events directory. Across the project I worked with <strong>multiple API’s</strong>, <strong>React Static</strong>, and developed <strong>clean code</strong> for other advanced React components.`
        },
        {
            url: '/projects/university-park',
            imgSrc: 'images/uptexas-thumb.jpg',
            alt: 'Thumbnail for the City of University Park complete Front End website redesign',
            projectName: 'University Park',
            projectYear: '2019',
            projectText: `I was tasked with being the <strong>sole developer</strong> on a <strong>complete Front-End redesign</strong>. Keeping their current users in mind, the goal was to make the website feel more modern, and offer a better user experience when navigating to each individual page. Across the entire project I implemented several dynamically generated content pages / sliders, <strong>form verification</strong>, and several <strong>third party integrations</strong>.`,
        },
        {
            url: '/projects/creative-revolt',
            imgSrc: 'images/Jorden-Background-Gray.jpg',
            alt: 'Thumbnail for the Creative Revolt redesigned website',
            projectName: 'Creative Revolt',
            projectYear: '2018',
            projectText: `This was a freelance project to <strong>rework the website layout</strong> and tailor the feel of the website to her personal writing style. I <strong>revamped the color palette</strong> to better match her personality, adjusted her website for <strong>SEO</strong>, and created the landing page as well as multiple pages across the platform.`,
        },
    ];

	return { portfolioCards };
}

class Projects extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$4, safe_not_equal, []);
	}
}

/* src/routes/index.svelte generated by Svelte v3.9.1 */

const file$5 = "src/routes/index.svelte";

function create_fragment$5(ctx) {
	var t0, div, t1, current;

	var hero = new Hero({ $$inline: true });

	var projects = new Projects({ $$inline: true });

	return {
		c: function create() {
			t0 = space();
			div = element("div");
			hero.$$.fragment.c();
			t1 = space();
			projects.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			hero.$$.fragment.l(div_nodes);
			t1 = claim_text(div_nodes, "\n    ");
			projects.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Home | Front End Developer - Joshua Roper";
			attr(div, "class", "container svelte-rig25y");
			add_location(div, file$5, 19, 0, 319);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, div, anchor);
			mount_component(hero, div, null);
			append(div, t1);
			mount_component(projects, div, null);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			transition_in(hero.$$.fragment, local);

			transition_in(projects.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(hero.$$.fragment, local);
			transition_out(projects.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(div);
			}

			destroy_component(hero);

			destroy_component(projects);
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$5, safe_not_equal, []);
	}
}

export default Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGM5NzYyMjYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1RleHQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgVGV4dEFuaW1hdGlvbiBmcm9tICcuLi9oZWxwZXItY29tcG9uZW50cy9UZXh0QW5pbWF0aW9uLnN2ZWx0ZSc7XG5cbmV4cG9ydCBsZXQgcHJvamVjdE5hbWUsIHVybCwgcHJvamVjdFRleHQsIHByb2plY3RZZWFyO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIGF7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICAgIGNvbG9yOiAjOTg5ODk4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDE1cmVtIDByZW0gNXJlbSAwcmVtO1xuICAgICAgICBmb250LXNpemU6IDEzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgY29sb3I6ICMzQjNCM0I7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgcHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3JlbTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgY29sb3I6ICM1ODU5NWI7XG4gICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgIH1cblxuICAgIC55ZWFye1xuICAgICAgICBcbiAgICAgICAgY29udGVudDogJzIwMTknO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIC8qIHdhcyAuNiBvcGFjaXR5ICovXG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICB6LWluZGV4OiAtNTtcbiAgICAgICAgLyogei1pbmRleDogLTE7ICovXG4gICAgICAgIGxlZnQ6IC02MHB4O1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIGNvbG9yOiAjZTZlN2U4O1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG5cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgICAgIH1cbiAgICB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3JlbTtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgfVxuICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRyZW07XG4gICAgfVxufVxuXG48L3N0eWxlPlxuPGRpdj5cbiAgICA8aDI+e3Byb2plY3ROYW1lfTwvaDI+XG4gICAgPHA+XG4gICAgICAgIDxzcGFuIGNsYXNzPSd5ZWFyJz57cHJvamVjdFllYXJ9PC9zcGFuPlxuICAgICAgICB7QGh0bWwgcHJvamVjdFRleHR9XG4gICAgPC9wPlxuICAgIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj1cInt1cmx9XCI+XG4gICAgICAgIDxUZXh0QW5pbWF0aW9uIHRleHQ9e2BWaWV3IFdlYnNpdGVgfSAvPlxuICAgIDwvYT5cbjwvZGl2PiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7ICBcblxuICAgIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLnN2ZWx0ZSc7XG4gICAgaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LnN2ZWx0ZSc7ICBcblxuICAgIGxldCBwb3J0Zm9saW9DYXJkcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsOiAnL3Byb2plY3RzL2hhbGN5b24nLFxuICAgICAgICAgICAgaW1nU3JjOiAnaW1hZ2VzL2hhbGN5b24tNS5qcGcnLFxuICAgICAgICAgICAgYWx0OiAnVGh1bWJuYWlsIGZvciB0aGUgSGFsY3lvbiBtYWxsIHdlYnNpdGUgcmVidWlsZCcsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0hhbGN5b24nLFxuICAgICAgICAgICAgcHJvamVjdFllYXI6ICcyMDE5JyxcbiAgICAgICAgICAgIHByb2plY3RUZXh0OiBgSSB3YXMgb25lIG9mIHRoZSBGcm9udCBFbmQgRGV2ZWxvcGVycyBvbiB0aGUgcHJvamVjdCBwcmltYXJpbHkgdGFza2VkIHdpdGggY3JlYXRpbmcgdGhlIG1vdmllcyBwYWdlIGFuZCBldmVudHMgZGlyZWN0b3J5LiBBY3Jvc3MgdGhlIHByb2plY3QgSSB3b3JrZWQgd2l0aCA8c3Ryb25nPm11bHRpcGxlIEFQSeKAmXM8L3N0cm9uZz4sIDxzdHJvbmc+UmVhY3QgU3RhdGljPC9zdHJvbmc+LCBhbmQgZGV2ZWxvcGVkIDxzdHJvbmc+Y2xlYW4gY29kZTwvc3Ryb25nPiBmb3Igb3RoZXIgYWR2YW5jZWQgUmVhY3QgY29tcG9uZW50cy5gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybDogJy9wcm9qZWN0cy91bml2ZXJzaXR5LXBhcmsnLFxuICAgICAgICAgICAgaW1nU3JjOiAnaW1hZ2VzL3VwdGV4YXMtdGh1bWIuanBnJyxcbiAgICAgICAgICAgIGFsdDogJ1RodW1ibmFpbCBmb3IgdGhlIENpdHkgb2YgVW5pdmVyc2l0eSBQYXJrIGNvbXBsZXRlIEZyb250IEVuZCB3ZWJzaXRlIHJlZGVzaWduJyxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnVW5pdmVyc2l0eSBQYXJrJyxcbiAgICAgICAgICAgIHByb2plY3RZZWFyOiAnMjAxOScsXG4gICAgICAgICAgICBwcm9qZWN0VGV4dDogYEkgd2FzIHRhc2tlZCB3aXRoIGJlaW5nIHRoZSA8c3Ryb25nPnNvbGUgZGV2ZWxvcGVyPC9zdHJvbmc+IG9uIGEgPHN0cm9uZz5jb21wbGV0ZSBGcm9udC1FbmQgcmVkZXNpZ248L3N0cm9uZz4uIEtlZXBpbmcgdGhlaXIgY3VycmVudCB1c2VycyBpbiBtaW5kLCB0aGUgZ29hbCB3YXMgdG8gbWFrZSB0aGUgd2Vic2l0ZSBmZWVsIG1vcmUgbW9kZXJuLCBhbmQgb2ZmZXIgYSBiZXR0ZXIgdXNlciBleHBlcmllbmNlIHdoZW4gbmF2aWdhdGluZyB0byBlYWNoIGluZGl2aWR1YWwgcGFnZS4gQWNyb3NzIHRoZSBlbnRpcmUgcHJvamVjdCBJIGltcGxlbWVudGVkIHNldmVyYWwgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIGNvbnRlbnQgcGFnZXMgLyBzbGlkZXJzLCA8c3Ryb25nPmZvcm0gdmVyaWZpY2F0aW9uPC9zdHJvbmc+LCBhbmQgc2V2ZXJhbCA8c3Ryb25nPnRoaXJkIHBhcnR5IGludGVncmF0aW9uczwvc3Ryb25nPi5gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6ICcvcHJvamVjdHMvY3JlYXRpdmUtcmV2b2x0JyxcbiAgICAgICAgICAgIGltZ1NyYzogJ2ltYWdlcy9Kb3JkZW4tQmFja2dyb3VuZC1HcmF5LmpwZycsXG4gICAgICAgICAgICBhbHQ6ICdUaHVtYm5haWwgZm9yIHRoZSBDcmVhdGl2ZSBSZXZvbHQgcmVkZXNpZ25lZCB3ZWJzaXRlJyxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnQ3JlYXRpdmUgUmV2b2x0JyxcbiAgICAgICAgICAgIHByb2plY3RZZWFyOiAnMjAxOCcsXG4gICAgICAgICAgICBwcm9qZWN0VGV4dDogYFRoaXMgd2FzIGEgZnJlZWxhbmNlIHByb2plY3QgdG8gPHN0cm9uZz5yZXdvcmsgdGhlIHdlYnNpdGUgbGF5b3V0PC9zdHJvbmc+IGFuZCB0YWlsb3IgdGhlIGZlZWwgb2YgdGhlIHdlYnNpdGUgdG8gaGVyIHBlcnNvbmFsIHdyaXRpbmcgc3R5bGUuIEkgPHN0cm9uZz5yZXZhbXBlZCB0aGUgY29sb3IgcGFsZXR0ZTwvc3Ryb25nPiB0byBiZXR0ZXIgbWF0Y2ggaGVyIHBlcnNvbmFsaXR5LCBhZGp1c3RlZCBoZXIgd2Vic2l0ZSBmb3IgPHN0cm9uZz5TRU88L3N0cm9uZz4sIGFuZCBjcmVhdGVkIHRoZSBsYW5kaW5nIHBhZ2UgYXMgd2VsbCBhcyBtdWx0aXBsZSBwYWdlcyBhY3Jvc3MgdGhlIHBsYXRmb3JtLmAsXG4gICAgICAgIH0sXG4gICAgXVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwJSAwIDEwJSAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTAlIDAgMTAlIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYuY2FyZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDUlO1xuICAgIH1cblxuICAgIGRpdi5pbWFnZS1jb250YWluZXIge1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgICAgICBkaXYuY2FyZC1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDglO1xuICAgICAgICB9XG4gICAgICAgIGRpdi5jYXJkLWNvbnRhaW5lcjpudGgtb2YtdHlwZSgybil7XG4gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgIH1cbiAgICAgICAgZGl2LnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5jYXJkLWNvbnRhaW5lcjpudGgtb2YtdHlwZSgybikgZGl2LmltYWdlLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKXtcbiAgICAgICAgZGl2LmNhcmQtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjNweCl7XG4gICAgICAgIGRpdi5jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGl2LnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgY29sb3I6ICMzQjNCM0I7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuXG4gICAgaDI6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcbiAgICB9XG5cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcmVtO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cblxuPHNlY3Rpb24+XG4gICAgPGgyPlNlbGVjdGVkIFdvcmtzPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIHsjZWFjaCBwb3J0Zm9saW9DYXJkcyBhcyBjYXJkLCBpbmRleH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiIHtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaW1nU3JjPXtjYXJkLmltZ1NyY30gdXJsPXtjYXJkLnVybH0gYWx0PXtjYXJkLmFsdH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgcHJvamVjdE5hbWU9e2NhcmQucHJvamVjdE5hbWV9IHVybD17Y2FyZC51cmx9IHByb2plY3RUZXh0PXtjYXJkLnByb2plY3RUZXh0fSBwcm9qZWN0WWVhcj17Y2FyZC5wcm9qZWN0WWVhcn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2VhY2h9XG4gICAgPC9kaXY+XG48L3NlY3Rpb24+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
