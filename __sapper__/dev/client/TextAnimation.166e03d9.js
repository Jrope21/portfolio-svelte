import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, c as claim_element, b as children, f as claim_text, d as detach, g as attr, h as add_location, j as insert, k as append, H as set_data, n as noop } from './index.f293fdc9.js';

/* src/components/helper-components/TextAnimation.svelte generated by Svelte v3.9.1 */

const file = "src/components/helper-components/TextAnimation.svelte";

function create_fragment(ctx) {
	var span, t;

	return {
		c: function create() {
			span = element("span");
			t = text(ctx.text);
			this.h();
		},

		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t = claim_text(span_nodes, ctx.text);
			span_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(span, "class", "hover-animation svelte-1qap1g0");
			add_location(span, file, 31, 0, 492);
		},

		m: function mount(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},

		p: function update(changed, ctx) {
			if (changed.text) {
				set_data(t, ctx.text);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(span);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { text } = $$props;

	const writable_props = ['text'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<TextAnimation> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('text' in $$props) $$invalidate('text', text = $$props.text);
	};

	return { text };
}

class TextAnimation extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["text"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.text === undefined && !('text' in props)) {
			console.warn("<TextAnimation> was created without expected prop 'text'");
		}
	}

	get text() {
		throw new Error("<TextAnimation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set text(value) {
		throw new Error("<TextAnimation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { TextAnimation as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEFuaW1hdGlvbi4xNjZlMDNkOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvaGVscGVyLWNvbXBvbmVudHMvVGV4dEFuaW1hdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmV4cG9ydCBsZXQgdGV4dDtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuc3Bhbi5ob3Zlci1hbmltYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5zcGFuLmhvdmVyLWFuaW1hdGlvbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC40NXMgY3ViaWMtYmV6aWVyKDAuODUsIDAuMDgsIDAuMDgsIDAuOTkpO1xufVxuXG5hOmhvdmVyID4gc3Bhbi5ob3Zlci1hbmltYXRpb246OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbjwvc3R5bGU+XG5cbjxzcGFuIGNsYXNzPVwiaG92ZXItYW5pbWF0aW9uXCI+e3RleHR9PC9zcGFuPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Z0JBK0IrQixJQUFJOzs7Ozs7OztrQ0FBSixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFBSixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0NBOUI1QixNQUFJLGdCQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=