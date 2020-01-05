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

// (240:12) {#if img.visible}
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
			add_location(img, file$1, 241, 20, 4577);
			attr(div, "class", "slide svelte-dkrsu9");
			add_location(div, file$1, 240, 16, 4492);
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

// (239:8) {#each STATE.images as img}
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

// (247:8) {#each STATE.images as img, i}
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
			attr(span, "class", span_class_value = "circle " + (ctx.img.visible ? 'active' : '') + " svelte-dkrsu9");
			add_location(span, file$1, 247, 12, 4756);
			dispose = listen(span, "click", click_handler);
		},

		m: function mount(target, anchor) {
			insert(target, span, anchor);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.STATE) && span_class_value !== (span_class_value = "circle " + (ctx.img.visible ? 'active' : '') + " svelte-dkrsu9")) {
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
	var div2, div0, t0, t1, div1, current;

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
			t0 = space();

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t1 = space();
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

			div0_nodes.forEach(detach);
			t0 = claim_text(div2_nodes, " \n    \n        ");

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div2_nodes);
			}

			t1 = claim_text(div2_nodes, "\n    ");

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
			attr(div0, "class", "box svelte-dkrsu9");
			add_location(div0, file$1, 236, 4, 4237);
			attr(div1, "class", "circles-container svelte-dkrsu9");
			add_location(div1, file$1, 245, 4, 4673);
			attr(div2, "class", "carousel-container svelte-dkrsu9");
			add_location(div2, file$1, 235, 0, 4200);
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div2, t0);

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div2, null);
			}

			append(div2, t1);
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
						each_blocks_1[i].m(div2, t1);
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
            src: 'images/desktop.png',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRpdmUtcmV2b2x0LjQ4MmE3MzQ4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9QYWdlVGl0bGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvQ2Fyb3VzZWwuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGl2ZS1yZXZvbHQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5leHBvcnQgbGV0IHRpdGxlLCBzaWRlUGFnZTtcbi8vIHNpZGVQYWdlIHNob3VsZCBiZSBzZXQgdG8gJ3NpZGUtcGFnZScgdG8gdG9nZ2xlIGNsYXNzXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYmFkU2xpZGVJblJpZ2h0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXY6bm90KC5wYWdlLWhlYWRlcikge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBtYXJnaW46IC0wNXB4IDBweCAyMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjNTg1OTViO1xuICAgICAgICBtYXgtd2lkdGg6IDEzMjBweDtcbiAgICB9XG5cbiAgICBkaXYuc2lkZS1wYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNzA1cHg7XG4gICAgfVxuXG4gICAgZGl2LnRpdGxlLWNvbnRhaW5lcjpub3QoLnNpZGUtcGFnZSl7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyogYW5pbWF0aW9uOiAuOXMgZWFzZS1vdXQgMHMgMSBmYWRlSW4gZm9yd2FyZHM7ICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgICAgICBkaXYudGl0bGUtY29udGFpbmVyOm5vdCguc2lkZS1wYWdlKXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdjpub3QoLnBhZ2UtaGVhZGVyKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5zaWRlLXBhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA4NSVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICMzQjNCM0I7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgLyogbGVmdDogLTEwMCU7ICovXG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIC8qIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluUmlnaHQgZm9yd2FyZHM7ICovXG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYucGFnZS1oZWFkZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MjByZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIGRpdi5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSl7XG4gICAgICAgIGRpdi5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BhbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTgwZGVnKSBza2V3KC0xMGRlZywgMGRlZyk7XG4gICAgICAgIG9wYWNpdHk6IC4wMztcbiAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICBib3R0b206IC0yNXB4O1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgYm90dG9tOiAtNTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pe1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXIgY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz0ndGl0bGUtY29udGFpbmVyIHtzaWRlUGFnZX0nPlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8c2NyaXB0PlxuaW1wb3J0IHsgZmFkZSwgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nXG5cbmxldCBTVEFURSA9IHtcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaW1hZ2VzL2Rlc2t0b3AucG5nJyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBrZXk6ICdkZXNrdG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaW1hZ2VzL3VwdGV4YXMtdGh1bWIuanBnJyxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAga2V5OiAndGFibGV0JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaW1hZ2VzL0pvcmRlbi1CYWNrZ3JvdW5kLUdyYXkuanBnJyxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAga2V5OiAnbW9iaWxlJyxcbiAgICAgICAgfSxcbiAgICBdXG59XG5cbmZ1bmN0aW9uIHN3aXRjaFNsaWRlcyhrZXkpIHtcbiAgICBcbiAgICBTVEFURS5pbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICBpZihrZXkgPT09IGltZy5rZXkpIHtcbiAgICAgICAgICAgIGltZy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1nLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBTVEFURSA9IHsuLi5TVEFURX07XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgbWFyZ2luOiA0MHJlbSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pe1xuICAgIC5ib3gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmJveDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zby13aGl0ZS5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxJTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgaGVpZ2h0OiA5JTtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYm90dG9tOiAtM3B4O1xuICAgIH1cblxuICAgIC5ib3g6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDklO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgICAuYm94IHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBoZWlnaHQ6IDUxNnB4O1xuICAgIH1cbiAgICAuYm94OjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgICAuYm94IHtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICBoZWlnaHQ6IDYxNnB4O1xuICAgIH1cbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogIzU4NTk1YjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbn1cblxuLnNsaWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggbGlnaHRncmV5O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgLnNsaWRlIHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBoZWlnaHQ6IDgyJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbjpnbG9iYWwoLnNsaWRlIGltZykge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7ICBcbn1cblxuZGl2LmNpcmNsZXMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDg1dnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7ICovXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgZGl2LmNpcmNsZXMtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG5cbiAgICBkaXYuY2lyY2xlcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuXG5zcGFuLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAgIHNwYW4uY2lyY2xlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzQjNCM0I7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkge1xuICAgIHNwYW4uY2lyY2xlIHtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICB9XG59XG5cbnNwYW4uY2lyY2xlOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTEwJTtcbiAgICBoZWlnaHQ6IDExMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMzQjNCM0I7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xufVxuXG5zcGFuLmNpcmNsZS5hY3RpdmU6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbn1cbjwvc3R5bGU+XG5cbjwhLS0gbm90ZXMgdG8gY29tZSBiYWNrIHRvIC0tPlxuPCEtLSBUT0RPIC0gIC0tPlxuPGRpdiBjbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJib3hcIj48L2Rpdj4gPCEtLSA8c3BhbiBjbGFzcz1cInRpdGxlXCI+Q1JFQVRJVkUgUkVWT0xUPC9zcGFuPiBUT0RPIHN0eWxlIHRleHQgdG8gYXBwZWFyIG5pY2Ugb24gZmFkZSBvdXQtLT5cbiAgICA8IS0tIFRPRE8gLSBtYWtlIHRvcCBvZiBib3ggbG9uZ2VyIHRoZW4gYm90dG9tIC0tPlxuICAgICAgICB7I2VhY2ggU1RBVEUuaW1hZ2VzIGFzIGltZ31cbiAgICAgICAgICAgIHsjaWYgaW1nLnZpc2libGV9XG4gICAgICAgICAgICAgICAgPGRpdiB0cmFuc2l0aW9uOmZseT1cInt7IHg6IC00MCwgZHVyYXRpb246IDU1MCB9fVwiIGNsYXNzPVwic2xpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7aW1nLnNyY31cIiBhbHQ9XCJ3YXNzdXBcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIHsvZWFjaH1cbiAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlcy1jb250YWluZXJcIj5cbiAgICAgICAgeyNlYWNoIFNUQVRFLmltYWdlcyBhcyBpbWcsIGl9XG4gICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZXMoaW1nLmtleSlcbiAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNpcmNsZSB7aW1nLnZpc2libGUgPyAnYWN0aXZlJyA6ICcnfVwiXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICB7L2VhY2h9XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8c2NyaXB0PlxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsL1BhZ2VUaXRsZS5zdmVsdGUnO1xuaW1wb3J0IEltYWdlR3JpZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsL0ltYWdlR3JpZC5zdmVsdGUnO1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvRGVzY3JpcHRpb24uc3ZlbHRlJ1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+Q3JlYXRpdmUgUmV2b2x0IHwgRnJvbnQgRW5kIERldmVsb3BlciAtIEpvc2h1YSBSb3BlcjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG5cbjxkaXYgXG4gICAgaW46Zmx5PVwie3sgeDogLTgwLCBkdXJhdGlvbjogNTAwLCBkZWxheTogMjAwLCB9fVwiXG4+XG4gICAgPFBhZ2VUaXRsZSB0aXRsZT17J0NyZWF0aXZlIFJldm9sdCd9IC8+XG48L2Rpdj5cblxuPHNlY3Rpb24gY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8SW1hZ2VHcmlkIC8+XG48L3NlY3Rpb24+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBNElhLEtBQUs7OztpQkFDSCxLQUFLOzs7Ozs7Ozs7Ozs7OztpQ0FEUCxLQUFLOzs7Ozs7O21DQUNILEtBQUs7Ozs7Ozs7Ozs7OzttRUFGYSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQzVCLEtBQUs7cUJBQ0gsS0FBSzs7OytGQUZhLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMUlsQyxNQUFJLEtBQUssRUFBRSxvQkFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0NnUEksR0FBRyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7OzZFQUFQLEdBQUcsQ0FBQyxHQUFHOzs7Ozs7OztzRkFEQSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFOzs7Ozs7OztxRkFBekIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFEOUMsR0FBRyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBQVgsR0FBRyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFZRyxHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxFQUFFOzttQ0FIaEM7Ozs7Ozs7OztvRkFHSyxHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBYjNDLEtBQUssQ0FBQyxNQUFNOzs7O2tDQUFqQjs7Ozs7Ozs7c0JBUUssS0FBSyxDQUFDLE1BQU07Ozs7Z0NBQWpCOzs7Ozs7Ozs7O3FDQVJBOzs7Ozs7O21DQVFBOzs7Ozs7Ozs7Ozs7Ozs7O3FDQVJBOzs7Ozs7Ozs7bUNBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQVJBOzs7Ozs7O21DQVFBOzs7Ozs7Ozs7dUJBUkssS0FBSyxDQUFDLE1BQU07O3FDQUFqQjs7Ozs7Ozs7Ozs7Ozs7OzBCQUFBLDBCQUFBOzs7OztxQkFRSyxLQUFLLENBQUMsTUFBTTs7bUNBQWpCOzs7Ozs7Ozs7Ozs7MkJBQUE7OztnQkFBQSxvQkFBQTs7Ozs7O29DQVJBOzs7Ozs7O3FDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EzT1YsSUFBSSxLQUFLLEdBQUc7SUFDUixNQUFNLEVBQUU7UUFDSjtZQUNJLEdBQUcsRUFBRSxvQkFBb0I7WUFDekIsT0FBTyxFQUFFLElBQUk7WUFDYixHQUFHLEVBQUUsU0FBUztTQUNqQjtRQUNEO1lBQ0ksR0FBRyxFQUFFLDBCQUEwQjtZQUMvQixPQUFPLEVBQUUsS0FBSztZQUNkLEdBQUcsRUFBRSxRQUFRO1NBQ2hCO1FBQ0Q7WUFDSSxHQUFHLEVBQUUsbUNBQW1DO1lBQ3hDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsR0FBRyxFQUFFLFFBQVE7U0FDaEI7S0FDSjtFQUNKOztBQUVELFNBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRTs7SUFFdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ3hCLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDaEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1NBRXRCLE1BQU07WUFDSCxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNKLEVBQUM7OzBCQUVGLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFDLENBQUM7Q0FDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDakJxQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFGMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
