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

// (229:12) {#if img.visible}
function create_if_block(ctx) {
	var div, img, img_src_value, div_transition, current;

	return {
		c: function create() {
			div = element("div");
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			img = claim_element(div_nodes, "IMG", { src: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(img, "src", img_src_value = ctx.img.src);
			attr(img, "alt", "wassup");
			add_location(img, file$1, 230, 20, 4397);
			attr(div, "class", "slide svelte-18xp8lf");
			add_location(div, file$1, 229, 16, 4311);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, img);
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
				if (!div_transition) div_transition = create_bidirectional_transition(div, fly$1, { x: -80, duration: 1050 }, true);
				div_transition.run(1);
			});

			current = true;
		},

		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, fly$1, { x: -80, duration: 1050 }, false);
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

// (228:8) {#each STATE.images as img}
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

// (236:8) {#each STATE.images as img, i}
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
			attr(span, "class", span_class_value = "circle " + (ctx.img.visible ? 'active' : '') + " svelte-18xp8lf");
			add_location(span, file$1, 236, 12, 4576);
			dispose = listen(span, "click", click_handler);
		},

		m: function mount(target, anchor) {
			insert(target, span, anchor);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.STATE) && span_class_value !== (span_class_value = "circle " + (ctx.img.visible ? 'active' : '') + " svelte-18xp8lf")) {
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
	var div2, div0, span, t0, t1, t2, div1, current;

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
			div0 = element("div");
			span = element("span");
			t0 = text("CREATIVE REVOLT");
			t1 = space();

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = space();
			div1 = element("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			span = claim_element(div0_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t0 = claim_text(span_nodes, "CREATIVE REVOLT");
			span_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, " \n    \n        ");

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div2_nodes);
			}

			t2 = claim_text(div2_nodes, "\n    ");

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
			attr(span, "class", "title svelte-18xp8lf");
			add_location(span, file$1, 225, 21, 4074);
			attr(div0, "class", "box svelte-18xp8lf");
			add_location(div0, file$1, 225, 4, 4057);
			attr(div1, "class", "circles-container svelte-18xp8lf");
			add_location(div1, file$1, 234, 4, 4493);
			attr(div2, "class", "carousel-container svelte-18xp8lf");
			add_location(div2, file$1, 224, 0, 4020);
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div0, span);
			append(span, t0);
			append(div2, t1);

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div2, null);
			}

			append(div2, t2);
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
						each_blocks_1[i].m(div2, t2);
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
            src: 'images/halcyon-5.jpg',
            visible: true,
            key: 'desktop',
        },
        {
            src: 'images/uptexas-thumb.jpg',
            visible: false,
            key: 'tablet',
        },
        {
            src: 'images/Jorden-Background-Gray.jpg',
            visible: false,
            key: 'mobile',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRpdmUtcmV2b2x0LmIwNzkwMGQxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9QYWdlVGl0bGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvQ2Fyb3VzZWwuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGl2ZS1yZXZvbHQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5leHBvcnQgbGV0IHRpdGxlLCBzaWRlUGFnZTtcbi8vIHNpZGVQYWdlIHNob3VsZCBiZSBzZXQgdG8gJ3NpZGUtcGFnZScgdG8gdG9nZ2xlIGNsYXNzXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYmFkU2xpZGVJblJpZ2h0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXY6bm90KC5wYWdlLWhlYWRlcikge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBtYXJnaW46IC0wNXB4IDBweCAyMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjNTg1OTViO1xuICAgICAgICBtYXgtd2lkdGg6IDEzMjBweDtcbiAgICB9XG5cbiAgICBkaXYuc2lkZS1wYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNzA1cHg7XG4gICAgfVxuXG4gICAgZGl2LnRpdGxlLWNvbnRhaW5lcjpub3QoLnNpZGUtcGFnZSl7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyogYW5pbWF0aW9uOiAuOXMgZWFzZS1vdXQgMHMgMSBmYWRlSW4gZm9yd2FyZHM7ICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgICAgICBkaXYudGl0bGUtY29udGFpbmVyOm5vdCguc2lkZS1wYWdlKXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdjpub3QoLnBhZ2UtaGVhZGVyKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5zaWRlLXBhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA4NSVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICMzQjNCM0I7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgLyogbGVmdDogLTEwMCU7ICovXG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIC8qIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluUmlnaHQgZm9yd2FyZHM7ICovXG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYucGFnZS1oZWFkZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MjByZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIGRpdi5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSl7XG4gICAgICAgIGRpdi5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BhbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTgwZGVnKSBza2V3KC0xMGRlZywgMGRlZyk7XG4gICAgICAgIG9wYWNpdHk6IC4wMztcbiAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICBib3R0b206IC0yNXB4O1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgYm90dG9tOiAtNTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXIgY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz0ndGl0bGUtY29udGFpbmVyIHtzaWRlUGFnZX0nPlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8c2NyaXB0PlxuaW1wb3J0IHsgZmFkZSwgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nXG5cbmxldCBTVEFURSA9IHtcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaW1hZ2VzL2hhbGN5b24tNS5qcGcnLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGtleTogJ2Rlc2t0b3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdpbWFnZXMvdXB0ZXhhcy10aHVtYi5qcGcnLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6ICd0YWJsZXQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdpbWFnZXMvSm9yZGVuLUJhY2tncm91bmQtR3JheS5qcGcnLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6ICdtb2JpbGUnLFxuICAgICAgICB9LFxuICAgIF1cbn1cblxuZnVuY3Rpb24gc3dpdGNoU2xpZGVzKGtleSkge1xuICAgIFxuICAgIFNUQVRFLmltYWdlcy5mb3JFYWNoKGltZyA9PiB7XG4gICAgICAgIGlmKGtleSA9PT0gaW1nLmtleSkge1xuICAgICAgICAgICAgaW1nLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWcudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIFNUQVRFID0gey4uLlNUQVRFfTtcbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5jYXJvdXNlbC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW46IDQwcmVtIDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgIC5ib3gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmJveDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zby13aGl0ZS5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxJTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgaGVpZ2h0OiA5JTtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYm90dG9tOiAtM3B4O1xuICAgIH1cblxuICAgIC5ib3g6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDklO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgICAuYm94IHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBoZWlnaHQ6IDUxNnB4O1xuICAgIH1cbiAgICAuYm94OjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgICAuYm94IHtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICBoZWlnaHQ6IDYxNnB4O1xuICAgIH1cbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogIzU4NTk1YjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbn1cblxuLnNsaWRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IGxpZ2h0Z3JleTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pe1xuICAgIC5zbGlkZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDg4JTtcbiAgICAgICAgaGVpZ2h0OiA4MiU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG46Z2xvYmFsKC5zbGlkZSBpbWcpIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAgXG59XG5cbmRpdi5jaXJjbGVzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpOyAqL1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAgIGRpdi5jaXJjbGVzLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG5cbiAgICBkaXYuY2lyY2xlcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTcwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuXG5zcGFuLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAgIHNwYW4uY2lyY2xlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM0IzQjNCO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgICBzcGFuLmNpcmNsZSB7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgfVxufVxuXG5zcGFuLmNpcmNsZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDExMCU7XG4gICAgaGVpZ2h0OiAxMTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjM0IzQjNCO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcbn1cblxuc3Bhbi5jaXJjbGUuYWN0aXZlOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG59XG48L3N0eWxlPlxuXG48IS0tIG5vdGVzIHRvIGNvbWUgYmFjayB0byAtLT5cbjwhLS0gVE9ETyAtICAtLT5cbjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYm94XCI+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPkNSRUFUSVZFIFJFVk9MVDwvc3Bhbj48L2Rpdj4gPCEtLSBUT0RPIHN0eWxlIHRleHQgdG8gYXBwZWFyIG5pY2Ugb24gZmFkZSBvdXQtLT5cbiAgICA8IS0tIFRPRE8gLSBtYWtlIHRvcCBvZiBib3ggbG9uZ2VyIHRoZW4gYm90dG9tIC0tPlxuICAgICAgICB7I2VhY2ggU1RBVEUuaW1hZ2VzIGFzIGltZ31cbiAgICAgICAgICAgIHsjaWYgaW1nLnZpc2libGV9XG4gICAgICAgICAgICAgICAgPGRpdiB0cmFuc2l0aW9uOmZseT1cInt7IHg6IC04MCwgZHVyYXRpb246IDEwNTAgfX1cIiBjbGFzcz1cInNsaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie2ltZy5zcmN9XCIgYWx0PVwid2Fzc3VwXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICB7L2VhY2h9XG4gICAgPGRpdiBjbGFzcz1cImNpcmNsZXMtY29udGFpbmVyXCI+XG4gICAgICAgIHsjZWFjaCBTVEFURS5pbWFnZXMgYXMgaW1nLCBpfVxuICAgICAgICAgICAgPHNwYW4gXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGVzKGltZy5rZXkpXG4gICAgICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjaXJjbGUge2ltZy52aXNpYmxlID8gJ2FjdGl2ZScgOiAnJ31cIlxuICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuPC9kaXY+IiwiPHNjcmlwdD5cbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9QYWdlVGl0bGUuc3ZlbHRlJztcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9JbWFnZUdyaWQuc3ZlbHRlJztcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsL0Rlc2NyaXB0aW9uLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkNyZWF0aXZlIFJldm9sdCB8IEZyb250IEVuZCBEZXZlbG9wZXIgLSBKb3NodWEgUm9wZXI8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuXG48ZGl2IFxuICAgIGluOmZseT1cInt7IHg6IC04MCwgZHVyYXRpb246IDUwMCwgZGVsYXk6IDIwMCwgfX1cIlxuPlxuICAgIDxQYWdlVGl0bGUgdGl0bGU9eydDcmVhdGl2ZSBSZXZvbHQnfSAvPlxuPC9kaXY+XG5cbjxzZWN0aW9uIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPEltYWdlR3JpZCAvPlxuPC9zZWN0aW9uPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O2lCQTRJYSxLQUFLOzs7aUJBQ0gsS0FB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
