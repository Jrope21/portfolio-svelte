import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, k as space, c as claim_element, a as children, l as claim_text, b as detach_dev, m as claim_space, f as attr_dev, g as add_location, h as insert_dev, j as append_dev, K as set_data_dev, n as noop } from './client.2a005e9c.js';

/* src/components/project-detail-components/PageTitle.svelte generated by Svelte v3.29.4 */

const file = "src/components/project-detail-components/PageTitle.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let h1;
	let t0;
	let t1;
	let span;
	let t2;
	let div0_class_value;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			span = element("span");
			t2 = text(/*title*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			span = claim_element(div0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, /*title*/ ctx[0]);
			span_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-81w521");
			add_location(h1, file, 159, 8, 3992);
			attr_dev(span, "class", "svelte-81w521");
			add_location(span, file, 160, 8, 4017);
			attr_dev(div0, "class", div0_class_value = "title-container " + /*sidePage*/ ctx[1] + " svelte-81w521");
			add_location(div0, file, 158, 4, 3943);
			attr_dev(div1, "class", "page-header svelte-81w521");
			add_location(div1, file, 157, 0, 3913);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, span);
			append_dev(span, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);
			if (dirty & /*title*/ 1) set_data_dev(t2, /*title*/ ctx[0]);

			if (dirty & /*sidePage*/ 2 && div0_class_value !== (div0_class_value = "title-container " + /*sidePage*/ ctx[1] + " svelte-81w521")) {
				attr_dev(div0, "class", div0_class_value);
			}
		},
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
	validate_slots("PageTitle", slots, []);
	let { title } = $$props, { sidePage } = $$props;
	const writable_props = ["title", "sidePage"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PageTitle> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("sidePage" in $$props) $$invalidate(1, sidePage = $$props.sidePage);
	};

	$$self.$capture_state = () => ({ title, sidePage });

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("sidePage" in $$props) $$invalidate(1, sidePage = $$props.sidePage);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [title, sidePage];
}

class PageTitle extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, sidePage: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PageTitle",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*title*/ ctx[0] === undefined && !("title" in props)) {
			console.warn("<PageTitle> was created without expected prop 'title'");
		}

		if (/*sidePage*/ ctx[1] === undefined && !("sidePage" in props)) {
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

export { PageTitle as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVRpdGxlLjY2OTRhZTNjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC1jb21wb25lbnRzL1BhZ2VUaXRsZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmV4cG9ydCBsZXQgdGl0bGUsIHNpZGVQYWdlO1xuLy8gc2lkZVBhZ2Ugc2hvdWxkIGJlIHNldCB0byAnc2lkZS1wYWdlJyB0byB0b2dnbGUgY2xhc3Ncbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgICBAaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFsLnZhcmlhYmxlcy5zY3NzJztcblxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJhZFNsaWRlSW5SaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGl2Om5vdCgucGFnZS1oZWFkZXIpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgbWFyZ2luOiAtMDVweCAwcHggMjBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE2cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogY29sb3Ioc2Vjb25kYXJ5KTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMzIwcHg7XG4gICAgfVxuXG4gICAgZGl2LnNpZGUtcGFnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgIG1heC13aWR0aDogMTcwNXB4O1xuICAgIH1cblxuICAgIGRpdi50aXRsZS1jb250YWluZXI6bm90KC5zaWRlLXBhZ2Upe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8qIGFuaW1hdGlvbjogLjlzIGVhc2Utb3V0IDBzIDEgZmFkZUluIGZvcndhcmRzOyAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KHNtKSl7XG4gICAgICAgIGRpdi50aXRsZS1jb250YWluZXI6bm90KC5zaWRlLXBhZ2Upe1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2Om5vdCgucGFnZS1oZWFkZXIpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhyZW07XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LnNpZGUtcGFnZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDg1JVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgLyogbGVmdDogLTEwMCU7ICovXG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIC8qIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgMHMgMSBzbGlkZUluUmlnaHQgZm9yd2FyZHM7ICovXG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChzbSkpe1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KG1kKSl7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpdi5wYWdlLWhlYWRlcntcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIGhlaWdodDogMTI1cHg7ICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChzbSkpe1xuICAgICAgICBkaXYucGFnZS1oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQobWQpKXtcbiAgICAgICAgZGl2LnBhZ2UtaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgIH1cbiAgICB9ICovXG5cbiAgICBzcGFue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxODBkZWcpIHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgICAgICAgb3BhY2l0eTogLjAzO1xuICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICAgIGJvdHRvbTogLTI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KHNtKSl7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgYm90dG9tOiAtNTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQobWQpKXtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz0ndGl0bGUtY29udGFpbmVyIHtzaWRlUGFnZX0nPlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgPC9kaXY+XG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQStKYSxHQUFLOzs7dUJBQ0gsR0FBSzs7Ozs7Ozs7Ozt1Q0FEUCxHQUFLOzs7Ozt5Q0FDSCxHQUFLOzs7Ozs7Ozs7OztnRkFGYSxHQUFROzs7Ozs7Ozs7Ozs7Ozs7dURBQzVCLEdBQUs7dURBQ0gsR0FBSzs7NEdBRmEsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTdKOUIsS0FBSyxnQkFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
