import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, k as space, c as claim_element, a as children, l as claim_text, b as detach_dev, m as claim_space, f as attr_dev, g as add_location, h as insert_dev, j as append_dev, D as set_data_dev, n as noop } from './client.87d3decb.js';

/* src/components/project-detail-components/PageTitle.svelte generated by Svelte v3.29.7 */

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
			attr_dev(h1, "class", "svelte-2m6p9c");
			add_location(h1, file, 147, 8, 2534);
			attr_dev(span, "class", "svelte-2m6p9c");
			add_location(span, file, 148, 8, 2559);
			attr_dev(div0, "class", div0_class_value = "title-container " + /*sidePage*/ ctx[1] + " svelte-2m6p9c");
			add_location(div0, file, 146, 4, 2485);
			attr_dev(div1, "class", "page-header svelte-2m6p9c");
			add_location(div1, file, 145, 0, 2455);
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

			if (dirty & /*sidePage*/ 2 && div0_class_value !== (div0_class_value = "title-container " + /*sidePage*/ ctx[1] + " svelte-2m6p9c")) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVRpdGxlLmNmNGY0YmJiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC1jb21wb25lbnRzL1BhZ2VUaXRsZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmV4cG9ydCBsZXQgdGl0bGUsIHNpZGVQYWdlO1xuLy8gc2lkZVBhZ2Ugc2hvdWxkIGJlIHNldCB0byAnc2lkZS1wYWdlJyB0byB0b2dnbGUgY2xhc3Ncbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgICBAaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFsLnZhcmlhYmxlcy5zY3NzJztcblxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJhZFNsaWRlSW5SaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGl2Om5vdCgucGFnZS1oZWFkZXIpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgbWFyZ2luOiAtMDVweCAwcHggMjBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE2cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogY29sb3IoaGVhZGVyVGV4dCk7XG4gICAgICAgIC8vIGNvbG9yOiBjb2xvcihzZWNvbmRhcnkpO1xuICAgICAgICBtYXgtd2lkdGg6IDEzMjBweDtcbiAgICB9XG5cbiAgICBkaXYuc2lkZS1wYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNzA1cHg7XG4gICAgfVxuXG4gICAgZGl2LnRpdGxlLWNvbnRhaW5lcjpub3QoLnNpZGUtcGFnZSl7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyogYW5pbWF0aW9uOiAuOXMgZWFzZS1vdXQgMHMgMSBmYWRlSW4gZm9yd2FyZHM7ICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQoc20pKXtcbiAgICAgICAgZGl2LnRpdGxlLWNvbnRhaW5lcjpub3QoLnNpZGUtcGFnZSl7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBkaXY6bm90KC5wYWdlLWhlYWRlcikge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuc2lkZS1wYWdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRyZW07XG4gICAgICAgICAgICB3aWR0aDogODUlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIC8vIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICAvKiBsZWZ0OiAtMTAwJTsgKi9cbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgLyogYW5pbWF0aW9uOiAxcyBlYXNlLW91dCAwcyAxIHNsaWRlSW5SaWdodCBmb3J3YXJkczsgKi9cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KHNtKSl7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQobWQpKXtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGl2LnBhZ2UtaGVhZGVye1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogaGVpZ2h0OiAxMjVweDsgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KHNtKSl7XG4gICAgICAgIGRpdi5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChtZCkpe1xuICAgICAgICBkaXYucGFnZS1oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgfVxuICAgIH0gKi9cblxuICAgIHNwYW57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKDE4MGRlZykgc2tldygtMTBkZWcsIDBkZWcpO1xuICAgICAgICBvcGFjaXR5OiAuMDM7XG4gICAgICAgIGxlZnQ6IDNweDtcbiAgICAgICAgYm90dG9tOiAtMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQoc20pKXtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICBib3R0b206IC01NXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChtZCkpe1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPSd0aXRsZS1jb250YWluZXIge3NpZGVQYWdlfSc+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBbUphLEdBQUs7Ozt1QkFDSCxHQUFLOzs7Ozs7Ozs7O3VDQURQLEdBQUs7Ozs7O3lDQUNILEdBQUs7Ozs7Ozs7Ozs7O2dGQUZhLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozt1REFDNUIsR0FBSzt1REFDSCxHQUFLOzs0R0FGYSxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bako5QixLQUFLLGdCQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
