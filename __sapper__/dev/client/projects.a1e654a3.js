import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, k as space, e as element, p as create_component, y as query_selector_all, b as detach_dev, m as claim_space, c as claim_element, a as children, q as claim_component, f as attr_dev, g as add_location, h as insert_dev, r as mount_component, n as noop, u as transition_in, w as transition_out, x as destroy_component } from './client.e02102a7.js';
import { P as Projects } from './Projects.c4830c66.js';

/* src/routes/projects.svelte generated by Svelte v3.29.4 */
const file = "src/routes/projects.svelte";

function create_fragment(ctx) {
	let t;
	let div;
	let projects;
	let current;
	projects = new Projects({ $$inline: true });

	const block = {
		c: function create() {
			t = space();
			div = element("div");
			create_component(projects.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-15vlb29\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(projects.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Projects | Front End Developer - Joshua Roper";
			attr_dev(div, "class", "container svelte-10dobqu");
			add_location(div, file, 19, 0, 278);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			mount_component(projects, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(projects.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(projects.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			destroy_component(projects);
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
	validate_slots("Projects", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Projects> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Projects });
	return [];
}

class Projects_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Projects_1",
			options,
			id: create_fragment.name
		});
	}
}

export default Projects_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYTFlNjU0YTMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
