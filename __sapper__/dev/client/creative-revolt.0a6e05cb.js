import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, d as detach, g as attr, h as add_location, j as insert, k as append, J as set_data, n as noop, z as mount_component, u as transition_in, x as transition_out, A as destroy_component, v as add_render_callback, w as create_in_transition } from './index.1646084c.js';
import { T as TextAnimation } from './TextAnimation.1c14e923.js';

/* src/components/project-detail/PageTitle.svelte generated by Svelte v3.9.1 */

const file = "src/components/project-detail/PageTitle.svelte";

function create_fragment(ctx) {
	var div1, div0, h1, t0, t1, span, t2, div0_class_value;

	return {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(ctx.title);
			t1 = space();
			span = element("span");
			t2 = text(ctx.title);
			this.h();
		},

		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			h1 = claim_element(div0_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, ctx.title);
			h1_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n        ");

			span = claim_element(div0_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t2 = claim_text(span_nodes, ctx.title);
			span_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h1, "class", "svelte-a5em78");
			add_location(h1, file, 140, 8, 2853);
			attr(span, "class", "svelte-a5em78");
			add_location(span, file, 141, 8, 2878);
			attr(div0, "class", div0_class_value = "title-container " + ctx.sidePage + " svelte-a5em78");
			add_location(div0, file, 139, 4, 2804);
			attr(div1, "class", "page-header container svelte-a5em78");
			add_location(div1, file, 138, 0, 2764);
		},

		m: function mount(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, h1);
			append(h1, t0);
			append(div0, t1);
			append(div0, span);
			append(span, t2);
		},

		p: function update(changed, ctx) {
			if (changed.title) {
				set_data(t0, ctx.title);
				set_data(t2, ctx.title);
			}

			if ((changed.sidePage) && div0_class_value !== (div0_class_value = "title-container " + ctx.sidePage + " svelte-a5em78")) {
				attr(div0, "class", div0_class_value);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div1);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title, sidePage } = $$props;
// sidePage should be set to 'side-page' to toggle class

	const writable_props = ['title', 'sidePage'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<PageTitle> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('title' in $$props) $$invalidate('title', title = $$props.title);
		if ('sidePage' in $$props) $$invalidate('sidePage', sidePage = $$props.sidePage);
	};

	return { title, sidePage };
}

class PageTitle extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["title", "sidePage"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.title === undefined && !('title' in props)) {
			console.warn("<PageTitle> was created without expected prop 'title'");
		}
		if (ctx.sidePage === undefined && !('sidePage' in props)) {
			console.warn("<PageTitle> was created without expected prop 'sidePage'");
		}
	}

	get title() {
		throw new Error("<PageTitle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<PageTitle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get sidePage() {
		throw new Error("<PageTitle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set sidePage(value) {
		throw new Error("<PageTitle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/project-detail/TopBar.svelte generated by Svelte v3.9.1 */

const file$1 = "src/components/project-detail/TopBar.svelte";

function create_fragment$1(ctx) {
	var div2, div0, h20, t0, t1, p0, t2, t3, div1, h21, t4, t5, p1, t6;

	return {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			h20 = element("h2");
			t0 = text("Project");
			t1 = space();
			p0 = element("p");
			t2 = text("Complete Front End Rebuild");
			t3 = space();
			div1 = element("div");
			h21 = element("h2");
			t4 = text("Role");
			t5 = space();
			p1 = element("p");
			t6 = text("Front End Developer");
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			h20 = claim_element(div0_nodes, "H2", { class: true }, false);
			var h20_nodes = children(h20);

			t0 = claim_text(h20_nodes, "Project");
			h20_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n        ");

			p0 = claim_element(div0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "Complete Front End Rebuild");
			p0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t3 = claim_text(div2_nodes, "\n    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			h21 = claim_element(div1_nodes, "H2", { class: true }, false);
			var h21_nodes = children(h21);

			t4 = claim_text(h21_nodes, "Role");
			h21_nodes.forEach(detach);
			t5 = claim_text(div1_nodes, "\n        ");

			p1 = claim_element(div1_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t6 = claim_text(p1_nodes, "Front End Developer");
			p1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h20, "class", "svelte-1upr8r");
			add_location(h20, file$1, 66, 8, 1300);
			attr(p0, "class", "svelte-1upr8r");
			add_location(p0, file$1, 67, 8, 1325);
			attr(div0, "class", "gridx-50");
			add_location(div0, file$1, 65, 4, 1269);
			attr(h21, "class", "svelte-1upr8r");
			add_location(h21, file$1, 75, 8, 1541);
			attr(p1, "class", "svelte-1upr8r");
			add_location(p1, file$1, 76, 8, 1563);
			attr(div1, "class", "gridx-50");
			add_location(div1, file$1, 74, 4, 1510);
			attr(div2, "class", "grid-x");
			add_location(div2, file$1, 64, 0, 1244);
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div0, h20);
			append(h20, t0);
			append(div0, t1);
			append(div0, p0);
			append(p0, t2);
			append(div2, t3);
			append(div2, div1);
			append(div1, h21);
			append(h21, t4);
			append(div1, t5);
			append(div1, p1);
			append(p1, t6);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div2);
			}
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { projectName, url, projectText, projectYear } = $$props;

	const writable_props = ['projectName', 'url', 'projectText', 'projectYear'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<TopBar> was created with unknown prop '${key}'`);
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

class TopBar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["projectName", "url", "projectText", "projectYear"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.projectName === undefined && !('projectName' in props)) {
			console.warn("<TopBar> was created without expected prop 'projectName'");
		}
		if (ctx.url === undefined && !('url' in props)) {
			console.warn("<TopBar> was created without expected prop 'url'");
		}
		if (ctx.projectText === undefined && !('projectText' in props)) {
			console.warn("<TopBar> was created without expected prop 'projectText'");
		}
		if (ctx.projectYear === undefined && !('projectYear' in props)) {
			console.warn("<TopBar> was created without expected prop 'projectYear'");
		}
	}

	get projectName() {
		throw new Error("<TopBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectName(value) {
		throw new Error("<TopBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get url() {
		throw new Error("<TopBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set url(value) {
		throw new Error("<TopBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get projectText() {
		throw new Error("<TopBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectText(value) {
		throw new Error("<TopBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get projectYear() {
		throw new Error("<TopBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectYear(value) {
		throw new Error("<TopBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/project-detail/Description.svelte generated by Svelte v3.9.1 */

const file$2 = "src/components/project-detail/Description.svelte";

function create_fragment$2(ctx) {
	var div, h2, t0, t1, p, t2, strong0, t3, t4, strong1, t5, t6, strong2, t7, t8, strong3, t9, t10, t11, a, current;

	var textanimation = new TextAnimation({
		props: { text: `View Website` },
		$$inline: true
	});

	return {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text("Project Details");
			t1 = space();
			p = element("p");
			t2 = text("I was tasked with being the ");
			strong0 = element("strong");
			t3 = text("sole developer");
			t4 = text(" on a ");
			strong1 = element("strong");
			t5 = text("complete Front-End redesign");
			t6 = text(". Keeping their current users in mind, the goal was to make the website feel more modern, and offer a better user experience when navigating to each individual page. Across the entire project I implemented several dynamically generated content pages / sliders, ");
			strong2 = element("strong");
			t7 = text("form verification");
			t8 = text(", and several ");
			strong3 = element("strong");
			t9 = text("third party integrations");
			t10 = text(".");
			t11 = space();
			a = element("a");
			textanimation.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			h2 = claim_element(div_nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t0 = claim_text(h2_nodes, "Project Details");
			h2_nodes.forEach(detach);
			t1 = claim_text(div_nodes, "\n    ");

			p = claim_element(div_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t2 = claim_text(p_nodes, "I was tasked with being the ");

			strong0 = claim_element(p_nodes, "STRONG", {}, false);
			var strong0_nodes = children(strong0);

			t3 = claim_text(strong0_nodes, "sole developer");
			strong0_nodes.forEach(detach);
			t4 = claim_text(p_nodes, " on a ");

			strong1 = claim_element(p_nodes, "STRONG", {}, false);
			var strong1_nodes = children(strong1);

			t5 = claim_text(strong1_nodes, "complete Front-End redesign");
			strong1_nodes.forEach(detach);
			t6 = claim_text(p_nodes, ". Keeping their current users in mind, the goal was to make the website feel more modern, and offer a better user experience when navigating to each individual page. Across the entire project I implemented several dynamically generated content pages / sliders, ");

			strong2 = claim_element(p_nodes, "STRONG", {}, false);
			var strong2_nodes = children(strong2);

			t7 = claim_text(strong2_nodes, "form verification");
			strong2_nodes.forEach(detach);
			t8 = claim_text(p_nodes, ", and several ");

			strong3 = claim_element(p_nodes, "STRONG", {}, false);
			var strong3_nodes = children(strong3);

			t9 = claim_text(strong3_nodes, "third party integrations");
			strong3_nodes.forEach(detach);
			t10 = claim_text(p_nodes, ".");
			p_nodes.forEach(detach);
			t11 = claim_text(div_nodes, "\n    ");

			a = claim_element(div_nodes, "A", { target: true, href: true, class: true }, false);
			var a_nodes = children(a);

			textanimation.$$.fragment.l(a_nodes);
			a_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h2, "class", "svelte-s2xmgv");
			add_location(h2, file$2, 66, 4, 1270);
			add_location(strong0, file$2, 67, 35, 1330);
			add_location(strong1, file$2, 67, 72, 1367);
			add_location(strong2, file$2, 67, 377, 1672);
			add_location(strong3, file$2, 67, 425, 1720);
			attr(p, "class", "svelte-s2xmgv");
			add_location(p, file$2, 67, 4, 1299);
			attr(a, "target", "blank");
			attr(a, "href", "");
			attr(a, "class", "svelte-s2xmgv");
			add_location(a, file$2, 68, 4, 1771);
			attr(div, "class", "text-container svelte-s2xmgv");
			add_location(div, file$2, 65, 0, 1237);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, h2);
			append(h2, t0);
			append(div, t1);
			append(div, p);
			append(p, t2);
			append(p, strong0);
			append(strong0, t3);
			append(p, t4);
			append(p, strong1);
			append(strong1, t5);
			append(p, t6);
			append(p, strong2);
			append(strong2, t7);
			append(p, t8);
			append(p, strong3);
			append(strong3, t9);
			append(p, t10);
			append(div, t11);
			append(div, a);
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
			if (detaching) {
				detach(div);
			}

			destroy_component(textanimation);
		}
	};
}

class Description extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$2, safe_not_equal, []);
	}
}

/* src/components/project-detail/Carousel.svelte generated by Svelte v3.9.1 */

const file$3 = "src/components/project-detail/Carousel.svelte";

function create_fragment$3(ctx) {
	var div2, div0, t, div1, img;

	return {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t = space();
			div1 = element("div");
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			div0_nodes.forEach(detach);
			t = claim_text(div2_nodes, "\n    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div0, "class", "box svelte-1rumodv");
			add_location(div0, file$3, 57, 4, 899);
			attr(img, "src", "images/Jorden-Background-Gray.jpg");
			attr(img, "alt", "wassup");
			attr(img, "class", "svelte-1rumodv");
			add_location(img, file$3, 59, 8, 955);
			attr(div1, "class", "slide svelte-1rumodv");
			add_location(div1, file$3, 58, 4, 927);
			attr(div2, "class", "carousel-container svelte-1rumodv");
			add_location(div2, file$3, 56, 0, 862);
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div2, t);
			append(div2, div1);
			append(div1, img);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div2);
			}
		}
	};
}

class Carousel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$3, safe_not_equal, []);
	}
}

/* src/components/project-detail/ImageGrid.svelte generated by Svelte v3.9.1 */

const file$4 = "src/components/project-detail/ImageGrid.svelte";

function create_fragment$4(ctx) {
	var div1, t0, div0, t1, current;

	var topbar = new TopBar({ $$inline: true });

	var description = new Description({ $$inline: true });

	var carousel = new Carousel({ $$inline: true });

	return {
		c: function create() {
			div1 = element("div");
			topbar.$$.fragment.c();
			t0 = space();
			div0 = element("div");
			description.$$.fragment.c();
			t1 = space();
			carousel.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			topbar.$$.fragment.l(div1_nodes);
			t0 = claim_text(div1_nodes, "\n    \n        ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			description.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n        \n        ");
			carousel.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div0, "class", "project-description svelte-y3hoac");
			add_location(div0, file$4, 64, 8, 1227);
			attr(div1, "class", "inner-container svelte-y3hoac");
			add_location(div1, file$4, 61, 0, 1140);
		},

		m: function mount(target, anchor) {
			insert(target, div1, anchor);
			mount_component(topbar, div1, null);
			append(div1, t0);
			append(div1, div0);
			mount_component(description, div0, null);
			append(div1, t1);
			mount_component(carousel, div1, null);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			transition_in(topbar.$$.fragment, local);

			transition_in(description.$$.fragment, local);

			transition_in(carousel.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(topbar.$$.fragment, local);
			transition_out(description.$$.fragment, local);
			transition_out(carousel.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div1);
			}

			destroy_component(topbar);

			destroy_component(description);

			destroy_component(carousel);
		}
	};
}

class ImageGrid extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$4, safe_not_equal, []);
	}
}

/* src/routes/projects/creative-revolt.svelte generated by Svelte v3.9.1 */

const file$5 = "src/routes/projects/creative-revolt.svelte";

function create_fragment$5(ctx) {
	var t0, div, div_intro, t1, section, current;

	var pagetitle = new PageTitle({
		props: { title: 'Creative Revolt' },
		$$inline: true
	});

	var imagegrid = new ImageGrid({ $$inline: true });

	return {
		c: function create() {
			t0 = space();
			div = element("div");
			pagetitle.$$.fragment.c();
			t1 = space();
			section = element("section");
			imagegrid.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			pagetitle.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\n");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			imagegrid.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Creative Revolt | Front End Developer - Joshua Roper";
			add_location(div, file$5, 14, 0, 363);
			attr(section, "class", "container");
			add_location(section, file$5, 20, 0, 477);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, div, anchor);
			mount_component(pagetitle, div, null);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			mount_component(imagegrid, section, null);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			transition_in(pagetitle.$$.fragment, local);

			if (!div_intro) {
				add_render_callback(() => {
					div_intro = create_in_transition(div, fly, { x: -80, duration: 500, delay: 200, });
					div_intro.start();
				});
			}

			transition_in(imagegrid.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(pagetitle.$$.fragment, local);
			transition_out(imagegrid.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(div);
			}

			destroy_component(pagetitle);

			if (detaching) {
				detach(t1);
				detach(section);
			}

			destroy_component(imagegrid);
		}
	};
}

class Creative_revolt extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$5, safe_not_equal, []);
	}
}

export default Creative_revolt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRpdmUtcmV2b2x0LjBhNmUwNWNiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9QYWdlVGl0bGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvVG9wQmFyLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsL0Rlc2NyaXB0aW9uLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJvamVjdHMvY3JlYXRpdmUtcmV2b2x0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuZXhwb3J0IGxldCB0aXRsZSwgc2lkZVBhZ2U7XG4vLyBzaWRlUGFnZSBzaG91bGQgYmUgc2V0IHRvICdzaWRlLXBhZ2UnIHRvIHRvZ2dsZSBjbGFzc1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJhZFNsaWRlSW5SaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGl2Om5vdCgucGFnZS1oZWFkZXIpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgbWFyZ2luOiAtMDVweCAwcHggMjBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE2cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogIzU4NTk1YjtcbiAgICAgICAgbWF4LXdpZHRoOiAxMzIwcHg7XG4gICAgfVxuXG4gICAgZGl2LnNpZGUtcGFnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgIG1heC13aWR0aDogMTcwNXB4O1xuICAgIH1cblxuICAgIGRpdi50aXRsZS1jb250YWluZXI6bm90KC5zaWRlLXBhZ2Upe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8qIGFuaW1hdGlvbjogLjlzIGVhc2Utb3V0IDBzIDEgZmFkZUluIGZvcndhcmRzOyAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKXtcbiAgICAgICAgZGl2LnRpdGxlLWNvbnRhaW5lcjpub3QoLnNpZGUtcGFnZSl7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBkaXY6bm90KC5wYWdlLWhlYWRlcikge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuc2lkZS1wYWdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRyZW07XG4gICAgICAgICAgICB3aWR0aDogODUlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAjM0IzQjNCO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIC8qIGxlZnQ6IC0xMDAlOyAqL1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAvKiBhbmltYXRpb246IDFzIGVhc2Utb3V0IDBzIDEgc2xpZGVJblJpZ2h0IGZvcndhcmRzOyAqL1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKXtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGl2LnBhZ2UtaGVhZGVye1xuICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjIwcmVtO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgICAgICBkaXYucGFnZS1oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgICAgICBkaXYucGFnZS1oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNwYW57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKDE4MGRlZykgc2tldygtMTBkZWcsIDBkZWcpO1xuICAgICAgICBvcGFjaXR5OiAuMDM7XG4gICAgICAgIGxlZnQ6IDNweDtcbiAgICAgICAgYm90dG9tOiAtMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIGJvdHRvbTogLTU1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKXtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyIGNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9J3RpdGxlLWNvbnRhaW5lciB7c2lkZVBhZ2V9Jz5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuPC9kaXY+IiwiPHNjcmlwdD5cbmltcG9ydCBUZXh0QW5pbWF0aW9uIGZyb20gJy4uL2hlbHBlci1jb21wb25lbnRzL1RleHRBbmltYXRpb24uc3ZlbHRlJztcblxuZXhwb3J0IGxldCBwcm9qZWN0TmFtZSwgdXJsLCBwcm9qZWN0VGV4dCwgcHJvamVjdFllYXI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgYXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICAgICAgY29sb3I6ICM5ODk4OTg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTVyZW0gMHJlbSA1cmVtIDByZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICBjb2xvcjogIzNCM0IzQjtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICBwe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDEzcmVtO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBjb2xvcjogIzU4NTk1YjtcbiAgICAgICAgLyogdGV4dC1pbmRlbnQ6IDEwcHg7ICovXG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKXtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNyZW07XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIH1cbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IDE0cmVtO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImdyaWQteFwiPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkeC01MFwiPlxuICAgICAgICA8aDI+UHJvamVjdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgQ29tcGxldGUgRnJvbnQgRW5kIFJlYnVpbGRcbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj1cInt1cmx9XCI+XG4gICAgICAgICAgICA8VGV4dEFuaW1hdGlvbiB0ZXh0PXtgVmlldyBXZWJzaXRlYH0gLz5cbiAgICAgICAgPC9hPiAtLT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZHgtNTBcIj5cbiAgICAgICAgPGgyPlJvbGU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIEZyb250IEVuZCBEZXZlbG9wZXJcbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj1cInt1cmx9XCI+XG4gICAgICAgICAgICA8VGV4dEFuaW1hdGlvbiB0ZXh0PXtgVmlldyBDb2RlYH0gLz5cbiAgICAgICAgPC9hPiAtLT5cbiAgICA8L2Rpdj5cbjwvZGl2PiIsIjxzY3JpcHQ+XG5pbXBvcnQgVGV4dEFuaW1hdGlvbiBmcm9tICcuLi9oZWxwZXItY29tcG9uZW50cy9UZXh0QW5pbWF0aW9uLnN2ZWx0ZSc7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGF7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICAgIGNvbG9yOiAjOTg5ODk4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDE1cmVtIDByZW0gNXJlbSAwcmVtO1xuICAgICAgICBmb250LXNpemU6IDEzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgY29sb3I6ICMzQjNCM0I7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgcHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3JlbTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgY29sb3I6ICM1ODU5NWI7XG4gICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSl7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDIzcmVtO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE4cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICB9XG4gICAgYXtcbiAgICAgICAgZm9udC1zaXplOiAxNHJlbTtcbiAgICB9XG59XG4udGV4dC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAxMzBweDtcbn1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgIDxoMj5Qcm9qZWN0IERldGFpbHM8L2gyPlxuICAgIDxwPkkgd2FzIHRhc2tlZCB3aXRoIGJlaW5nIHRoZSA8c3Ryb25nPnNvbGUgZGV2ZWxvcGVyPC9zdHJvbmc+IG9uIGEgPHN0cm9uZz5jb21wbGV0ZSBGcm9udC1FbmQgcmVkZXNpZ248L3N0cm9uZz4uIEtlZXBpbmcgdGhlaXIgY3VycmVudCB1c2VycyBpbiBtaW5kLCB0aGUgZ29hbCB3YXMgdG8gbWFrZSB0aGUgd2Vic2l0ZSBmZWVsIG1vcmUgbW9kZXJuLCBhbmQgb2ZmZXIgYSBiZXR0ZXIgdXNlciBleHBlcmllbmNlIHdoZW4gbmF2aWdhdGluZyB0byBlYWNoIGluZGl2aWR1YWwgcGFnZS4gQWNyb3NzIHRoZSBlbnRpcmUgcHJvamVjdCBJIGltcGxlbWVudGVkIHNldmVyYWwgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIGNvbnRlbnQgcGFnZXMgLyBzbGlkZXJzLCA8c3Ryb25nPmZvcm0gdmVyaWZpY2F0aW9uPC9zdHJvbmc+LCBhbmQgc2V2ZXJhbCA8c3Ryb25nPnRoaXJkIHBhcnR5IGludGVncmF0aW9uczwvc3Ryb25nPi48L3A+XG4gICAgPGEgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPVwiXCI+XG4gICAgICAgIDxUZXh0QW5pbWF0aW9uIHRleHQ9e2BWaWV3IFdlYnNpdGVgfSAvPlxuICAgIDwvYT5cbjwvZGl2PiIsIjxzY3JpcHQ+XG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvUGFnZVRpdGxlLnN2ZWx0ZSc7XG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvSW1hZ2VHcmlkLnN2ZWx0ZSc7XG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9EZXNjcmlwdGlvbi5zdmVsdGUnXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5DcmVhdGl2ZSBSZXZvbHQgfCBGcm9udCBFbmQgRGV2ZWxvcGVyIC0gSm9zaHVhIFJvcGVyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgXG4gICAgaW46Zmx5PVwie3sgeDogLTgwLCBkdXJhdGlvbjogNTAwLCBkZWxheTogMjAwLCB9fVwiXG4+XG4gICAgPFBhZ2VUaXRsZSB0aXRsZT17J0NyZWF0aXZlIFJldm9sdCd9IC8+XG48L2Rpdj5cblxuPHNlY3Rpb24gY2xhc3M9XCJjb250YWluZXJcIj5cbiAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8RGVzY3JpcHRpb24gLz5cbiAgIDwvZGl2PiAgLS0+XG4gICAgPEltYWdlR3JpZCAvPlxuPC9zZWN0aW9uPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7aUJBNElhLEtBQUs7OztpQkFDSCxLQUFLOzs7Ozs7Ozs7Ozs7OztpQ0FEUCxLQUFLOzs7Ozs7O21DQUNILEtBQUs7Ozs7Ozs7Ozs7OzttRUFGYSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQzVCLEtBQUs7cUJBQ0gsS0FBSzs7OytGQUZhLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMUlsQyxNQUFJLEtBQUssRUFBRSxvQkFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDRXBCLE1BQUksV0FBVyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsdUJBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQ2tFekIsQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3BEckIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBRjFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
