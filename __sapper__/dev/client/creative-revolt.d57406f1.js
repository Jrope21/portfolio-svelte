import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, d as detach, g as attr, h as add_location, j as insert, k as append, J as set_data, n as noop, B as empty, u as transition_in, v as add_render_callback, P as create_bidirectional_transition, C as group_outros, x as transition_out, D as check_outros, l as listen, O as destroy_each, z as mount_component, A as destroy_component, w as create_in_transition } from './index.86fc6f69.js';
import { f as fly$1 } from './index.60cd3d27.js';
import './TextAnimation.11321dbd.js';

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

/* src/components/project-detail/Carousel.svelte generated by Svelte v3.9.1 */

const file$1 = "src/components/project-detail/Carousel.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.img = list[i];
	child_ctx.i = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.img = list[i];
	return child_ctx;
}

// (358:12) {#if img.visible}
function create_if_block(ctx) {
	var div, button0, span0, t0, img, img_src_value, t1, button1, span1, div_transition, current;

	return {
		c: function create() {
			div = element("div");
			button0 = element("button");
			span0 = element("span");
			t0 = space();
			img = element("img");
			t1 = space();
			button1 = element("button");
			span1 = element("span");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			button0 = claim_element(div_nodes, "BUTTON", { class: true }, false);
			var button0_nodes = children(button0);

			span0 = claim_element(button0_nodes, "SPAN", { class: true }, false);
			var span0_nodes = children(span0);

			span0_nodes.forEach(detach);
			button0_nodes.forEach(detach);
			t0 = claim_text(div_nodes, "\n                    ");

			img = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			t1 = claim_text(div_nodes, "\n                    ");

			button1 = claim_element(div_nodes, "BUTTON", { class: true }, false);
			var button1_nodes = children(button1);

			span1 = claim_element(button1_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			span1_nodes.forEach(detach);
			button1_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(span0, "class", "arrow-left svelte-16hitau");
			add_location(span0, file$1, 360, 24, 7119);
			attr(button0, "class", "back svelte-16hitau");
			add_location(button0, file$1, 359, 20, 7073);
			attr(img, "src", img_src_value = ctx.img.src);
			attr(img, "alt", "wassup");
			attr(img, "class", "svelte-16hitau");
			add_location(img, file$1, 362, 20, 7202);
			attr(span1, "class", "arrow-right svelte-16hitau");
			add_location(span1, file$1, 364, 24, 7303);
			attr(button1, "class", "next svelte-16hitau");
			add_location(button1, file$1, 363, 20, 7257);
			attr(div, "class", "slide svelte-16hitau");
			add_location(div, file$1, 358, 16, 6988);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, button0);
			append(button0, span0);
			append(div, t0);
			append(div, img);
			append(div, t1);
			append(div, button1);
			append(button1, span1);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.STATE) && img_src_value !== (img_src_value = ctx.img.src)) {
				attr(img, "src", img_src_value);
			}
		},

		i: function intro(local) {
			if (current) return;
			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, fly$1, { x: -40, duration: 550 }, true);
				div_transition.run(1);
			});

			current = true;
		},

		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, fly$1, { x: -40, duration: 550 }, false);
			div_transition.run(0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
				if (div_transition) div_transition.end();
			}
		}
	};
}

// (357:8) {#each STATE.images as img}
function create_each_block_1(ctx) {
	var if_block_anchor, current;

	var if_block = (ctx.img.visible) && create_if_block(ctx);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},

		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if (ctx.img.visible) {
				if (if_block) {
					if_block.p(changed, ctx);
					transition_in(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();
				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},

		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach(if_block_anchor);
			}
		}
	};
}

// (371:8) {#each STATE.images as img, i}
function create_each_block(ctx) {
	var span, span_class_value, dispose;

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	return {
		c: function create() {
			span = element("span");
			this.h();
		},

		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			span_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(span, "class", span_class_value = "circle " + (ctx.img.visible ? 'active' : '') + " svelte-16hitau");
			add_location(span, file$1, 371, 12, 7511);
			dispose = listen(span, "click", click_handler);
		},

		m: function mount(target, anchor) {
			insert(target, span, anchor);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.STATE) && span_class_value !== (span_class_value = "circle " + (ctx.img.visible ? 'active' : '') + " svelte-16hitau")) {
				attr(span, "class", span_class_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(span);
			}

			dispose();
		}
	};
}

function create_fragment$1(ctx) {
	var div2, span, t0, t1, div0, t2, t3, div1, current;

	var each_value_1 = ctx.STATE.images;

	var each_blocks_1 = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks_1[i], 1, 1, () => {
		each_blocks_1[i] = null;
	});

	var each_value = ctx.STATE.images;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			div2 = element("div");
			span = element("span");
			t0 = text("CREATIVE REVOLT");
			t1 = space();
			div0 = element("div");
			t2 = space();

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t3 = space();
			div1 = element("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			span = claim_element(div2_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t0 = claim_text(span_nodes, "CREATIVE REVOLT");
			span_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n    ");

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, " \n    \n        ");

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div2_nodes);
			}

			t3 = claim_text(div2_nodes, "\n    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(span, "class", "title svelte-16hitau");
			add_location(span, file$1, 353, 0, 6686);
			attr(div0, "class", "box svelte-16hitau");
			add_location(div0, file$1, 354, 4, 6733);
			attr(div1, "class", "circles-container svelte-16hitau");
			add_location(div1, file$1, 369, 4, 7428);
			attr(div2, "class", "carousel-container svelte-16hitau");
			add_location(div2, file$1, 352, 0, 6653);
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, span);
			append(span, t0);
			append(div2, t1);
			append(div2, div0);
			append(div2, t2);

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div2, null);
			}

			append(div2, t3);
			append(div2, div1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.STATE) {
				each_value_1 = ctx.STATE.images;

				for (var i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(changed, child_ctx);
						transition_in(each_blocks_1[i], 1);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						transition_in(each_blocks_1[i], 1);
						each_blocks_1[i].m(div2, t3);
					}
				}

				group_outros();
				for (i = each_value_1.length; i < each_blocks_1.length; i += 1) out(i);
				check_outros();
			}

			if (changed.STATE) {
				each_value = ctx.STATE.images;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value_1.length; i += 1) transition_in(each_blocks_1[i]);

			current = true;
		},

		o: function outro(local) {
			each_blocks_1 = each_blocks_1.filter(Boolean);
			for (let i = 0; i < each_blocks_1.length; i += 1) transition_out(each_blocks_1[i]);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div2);
			}

			destroy_each(each_blocks_1, detaching);

			destroy_each(each_blocks, detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let STATE = {
    images: [
        {
            src: 'images/creative-revolt/home.png',
            visible: true,
            key: 'home',
        },
        {
            src: 'images/creative-revolt/home-ctas.png',
            visible: false,
            key: 'home-ctas',
        },
        {
            src: 'images/creative-revolt/about.png',
            visible: false,
            key: 'about',
        },
        {
            src: 'images/creative-revolt/about-cta.png',
            visible: false,
            key: 'about-ctas',
        },
        {
            src: 'images/creative-revolt/writing-class.png',
            visible: false,
            key: 'writing-class',
        },
    ]
};

function switchSlides(key) {
    
    STATE.images.forEach(img => {
        if(key === img.key) {
            img.visible = true;
            
        } else {
            img.visible = false;
        }
    });

    $$invalidate('STATE', STATE = {...STATE});
}

	function click_handler({ img }) {
	                    switchSlides(img.key);
	                }

	return { STATE, switchSlides, click_handler };
}

class Carousel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, []);
	}
}

/* src/components/project-detail/ImageGrid.svelte generated by Svelte v3.9.1 */

const file$2 = "src/components/project-detail/ImageGrid.svelte";

function create_fragment$2(ctx) {
	var div, current;

	var carousel = new Carousel({ $$inline: true });

	return {
		c: function create() {
			div = element("div");
			carousel.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			carousel.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "inner-container svelte-y3hoac");
			add_location(div, file$2, 61, 0, 1140);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			mount_component(carousel, div, null);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			transition_in(carousel.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(carousel.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			destroy_component(carousel);
		}
	};
}

class ImageGrid extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$2, safe_not_equal, []);
	}
}

/* src/routes/projects/creative-revolt.svelte generated by Svelte v3.9.1 */

const file$3 = "src/routes/projects/creative-revolt.svelte";

function create_fragment$3(ctx) {
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
			t0 = claim_text(nodes, "\n\n\n");

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
			add_location(div, file$3, 15, 0, 364);
			attr(section, "class", "container");
			add_location(section, file$3, 21, 0, 478);
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
		init(this, options, null, create_fragment$3, safe_not_equal, []);
	}
}

export default Creative_revolt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRpdmUtcmV2b2x0LmQ1NzQwNmYxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9QYWdlVGl0bGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvQ2Fyb3VzZWwuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGl2ZS1yZXZvbHQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5leHBvcnQgbGV0IHRpdGxlLCBzaWRlUGFnZTtcbi8vIHNpZGVQYWdlIHNob3VsZCBiZSBzZXQgdG8gJ3NpZGUtcGFnZScgdG8gdG9nZ2xlIGNsYXNzXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYmFkU2xpZGVJblJpZ2h0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXY6bm90KC5wYWdlLWhlYWRlcikge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBtYXJnaW46IC0wNXB4IDBweCAyMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjNTg1OTViO1xuICAgICAgICBtYXgtd2lkdGg6IDEzMjBweDtcbiAgICB9XG5cbiAgICBkaXYuc2lkZS1wYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNzA1cHg7XG4gICAgfVxuXG4gICAgZGl2LnRpdGxlLWNvbnRhaW5lcjpub3QoLnNpZGUtcGFnZSl7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyogYW5pbWF0aW9uOiAuOXMgZWFzZS1vdXQgMHMgMSBmYWRlSW4gZm9yd2FyZHM7ICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgICAgICBkaXYudGl0bGUtY29udGFpbmVyOm5vdCguc2lkZS1wYWdlKXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdjpub3QoLnBhZ2UtaGVhZGVyKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5zaWRlLXBhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA4NSVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICMzQjNCM0I7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgLyogbGVmdDogLTEwMCU7ICovXG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIC8qIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluUmlnaHQgZm9yd2FyZHM7ICovXG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYucGFnZS1oZWFkZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MjByZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIGRpdi5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSl7XG4gICAgICAgIGRpdi5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BhbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTgwZGVnKSBza2V3KC0xMGRlZywgMGRlZyk7XG4gICAgICAgIG9wYWNpdHk6IC4wMztcbiAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICBib3R0b206IC0yNXB4O1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgYm90dG9tOiAtNTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXIgY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz0ndGl0bGUtY29udGFpbmVyIHtzaWRlUGFnZX0nPlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8c2NyaXB0PlxuaW1wb3J0IHsgZmFkZSwgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nXG5cbmxldCBTVEFURSA9IHtcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaW1hZ2VzL2NyZWF0aXZlLXJldm9sdC9ob21lLnBuZycsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAga2V5OiAnaG9tZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ2ltYWdlcy9jcmVhdGl2ZS1yZXZvbHQvaG9tZS1jdGFzLnBuZycsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGtleTogJ2hvbWUtY3RhcycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ2ltYWdlcy9jcmVhdGl2ZS1yZXZvbHQvYWJvdXQucG5nJyxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAga2V5OiAnYWJvdXQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdpbWFnZXMvY3JlYXRpdmUtcmV2b2x0L2Fib3V0LWN0YS5wbmcnLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6ICdhYm91dC1jdGFzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaW1hZ2VzL2NyZWF0aXZlLXJldm9sdC93cml0aW5nLWNsYXNzLnBuZycsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGtleTogJ3dyaXRpbmctY2xhc3MnLFxuICAgICAgICB9LFxuICAgIF1cbn1cblxuZnVuY3Rpb24gc3dpdGNoU2xpZGVzKGtleSkge1xuICAgIFxuICAgIFNUQVRFLmltYWdlcy5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgIGlmKGtleSA9PT0gaW1nLmtleSkge1xuICAgICAgICAgICAgaW1nLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWcudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIFNUQVRFID0gey4uLlNUQVRFfTtcbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5jYXJvdXNlbC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW46IDQwcmVtIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjUwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgLmJveCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAuYm94OjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3NvLXdoaXRlLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDElO1xuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDklO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgICBib3R0b206IC0zcHg7XG4gICAgfVxuXG4gICAgLmJveDo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgYmxhY2s7XG4gICAgICAgIGhlaWdodDogOSU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IC0zcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkge1xuICAgIC5ib3gge1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIGhlaWdodDogNTE2cHg7XG4gICAgfVxuICAgIC5ib3g6OmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEzNjZweCkge1xuICAgIC5ib3gge1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGhlaWdodDogNjE2cHg7XG4gICAgfVxufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzU4NTk1YjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogLTIwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGxlZnQ6IC0yNSVcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEzNjZweCkge1xuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjdweDtcbiAgICB9XG59XG5cblxuLnNsaWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggbGlnaHRncmV5O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgLnNsaWRlIHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBoZWlnaHQ6IDgyJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi5zbGlkZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IHRvcDsgIFxufVxuXG5kaXYuY2lyY2xlcy1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICAvKiBoZWlnaHQ6IDI1MHB4OyAqL1xuICAgIGJvdHRvbTogLTMwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gICAgLyogYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpOyAqL1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAgIGRpdi5jaXJjbGVzLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIC8qIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBsZWZ0OiAxMiU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgLyogdG9wOiA5JTsgKi9cbiAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAqL1xuICAgICAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICAgICAgICBcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG5cbiAgICBkaXYuY2lyY2xlcy1jb250YWluZXIge1xuICAgICAgICAvKiBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXG4gICAgICAgIFxuICAgIH1cbn1cblxuc3Bhbi5jaXJjbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNCM0IzQjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAwcHggMjBweCAwIDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgICBzcGFuLmNpcmNsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjM0IzQjNCOyAqL1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgICBzcGFuLmNpcmNsZSB7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gICAgc3Bhbi5jaXJjbGUge1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG5zcGFuLmNpcmNsZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDExMCU7XG4gICAgaGVpZ2h0OiAxMTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjM0IzQjNCO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcbn1cblxuc3Bhbi5jaXJjbGUuYWN0aXZlOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbmJ1dHRvbi5uZXh0LCBidXR0b24uYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgXG4gICAgb3BhY2l0eTogLjM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbn1cblxuYnV0dG9uLm5leHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHJnYmEoMCwwLDAsLjY1KSAwLHJnYmEoMCwwLDAsMCkgMTAwJSkgcmdiYSgwLDAsMCwwKTtcbn1cblxuYnV0dG9uLmJhY2sge1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjY1KSAwLHJnYmEoMCwwLDAsMCkgMTAwJSkgcmdiYSgwLDAsMCwwKVxufVxuXG5idXR0b24ubmV4dDpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmFycm93LWxlZnQsIC5hcnJvdy1yaWdodCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuMnM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dCAuMnM7XG4gICAgcmlnaHQ6IDMwcHg7XG59XG5cbi5hcnJvdy1sZWZ0OjpiZWZvcmUsIC5hcnJvdy1yaWdodDo6YmVmb3JlLCAuYXJyb3ctbGVmdDo6YWZ0ZXIsIC5hcnJvdy1yaWdodDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCUgMDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJSAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLW91dDtcbn1cblxuLmFycm93LWxlZnQ6OmJlZm9yZSB7XG4gICAgdG9wOiAtNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmFycm93LWxlZnQ6OmFmdGVyIHtcbiAgICB0b3A6IGNhbGMoLTUwJSArIC0xcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uYXJyb3ctcmlnaHQ6OmJlZm9yZSB7XG4gICAgdG9wOiAtNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uYXJyb3ctcmlnaHQ6OmFmdGVyIHtcbiAgICB0b3A6IGNhbGMoLTUwJSArIC0xcHgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG59XG48L3N0eWxlPlxuXG48IS0tIG5vdGVzIHRvIGNvbWUgYmFjayB0byAtLT5cbjwhLS0gVE9ETyAtICAtLT5cbjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cbjxzcGFuIGNsYXNzPVwidGl0bGVcIj5DUkVBVElWRSBSRVZPTFQ8L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cImJveFwiPjwvZGl2PiA8IS0tIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5DUkVBVElWRSBSRVZPTFQ8L3NwYW4+IFRPRE8gc3R5bGUgdGV4dCB0byBhcHBlYXIgbmljZSBvbiBmYWRlIG91dC0tPlxuICAgIDwhLS0gVE9ETyAtIG1ha2UgdG9wIG9mIGJveCBsb25nZXIgdGhlbiBib3R0b20gLS0+XG4gICAgICAgIHsjZWFjaCBTVEFURS5pbWFnZXMgYXMgaW1nfVxuICAgICAgICAgICAgeyNpZiBpbWcudmlzaWJsZX1cbiAgICAgICAgICAgICAgICA8ZGl2IHRyYW5zaXRpb246Zmx5PVwie3sgeDogLTQwLCBkdXJhdGlvbjogNTUwIH19XCIgY2xhc3M9XCJzbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcnJvdy1sZWZ0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7aW1nLnNyY31cIiBhbHQ9XCJ3YXNzdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJyb3ctcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgey9lYWNofVxuICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVzLWNvbnRhaW5lclwiPlxuICAgICAgICB7I2VhY2ggU1RBVEUuaW1hZ2VzIGFzIGltZywgaX1cbiAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlcyhpbWcua2V5KVxuICAgICAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2lyY2xlIHtpbWcudmlzaWJsZSA/ICdhY3RpdmUnIDogJyd9XCJcbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cbjwvZGl2PiIsIjxzY3JpcHQ+XG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvUGFnZVRpdGxlLnN2ZWx0ZSc7XG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvSW1hZ2VHcmlkLnN2ZWx0ZSc7XG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9EZXNjcmlwdGlvbi5zdmVsdGUnXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5DcmVhdGl2ZSBSZXZvbHQgfCBGcm9udCBFbmQgRGV2ZWxvcGVyIC0gSm9zaHVhIFJvcGVyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cblxuPGRpdiBcbiAgICBpbjpmbHk9XCJ7eyB4OiAtODAsIGR1cmF0aW9uOiA1MDAsIGRlbGF5OiAyMDAsIH19XCJcbj5cbiAgICA8UGFnZVRpdGxlIHRpdGxlPXsnQ3JlYXRpdmUgUmV2b2x0J30gLz5cbjwvZGl2PlxuXG48c2VjdGlvbiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxJbWFnZUdyaWQgLz5cbjwvc2VjdGlvbj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztpQkE0SWEsS0FBSzs7O2lCQUNILEtBQUs7Ozs7Ozs7Ozs7Ozs7O2lDQURQLEtBQUs7Ozs7Ozs7bUNBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O21FQUZhLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFDNUIsS0FBSztxQkFDSCxLQUFLOzs7K0ZBRmEsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ExSWxDLE1BQUksS0FBSyxFQUFFLG9CQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQ3lXSSxHQUFHLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RUFBUCxHQUFHLENBQUMsR0FBRzs7Ozs7Ozs7c0ZBSkEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTs7Ozs7Ozs7cUZBQXpCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBRDlDLEdBQUcsQ0FBQyxPQUFP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
