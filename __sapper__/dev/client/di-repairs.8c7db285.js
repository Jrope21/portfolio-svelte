import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as create_component, q as claim_component, r as mount_component, n as noop, u as transition_in, w as transition_out, x as destroy_component } from './client.21a46568.js';
import './PageTitle.ff709e6e.js';
import { P as ProjectDetailTemplate } from './ProjectDetailTemplate.80384d20.js';

var Image1 = "/client/9abdbcd2047b9f67.png";

var Image2 = "/client/e2a532545129ff84.png";

var Image3 = "/client/e307792feaee8208.png";

var Image4 = "/client/ebcd26aac1798372.png";

var Image5 = "/client/cbfd060479896c85.png";

/* src/routes/projects/di-repairs.svelte generated by Svelte v3.29.7 */

function create_fragment(ctx) {
	let projectdetailtemplate;
	let current;

	projectdetailtemplate = new ProjectDetailTemplate({
			props: { STATE: /*STATE*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(projectdetailtemplate.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(projectdetailtemplate.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(projectdetailtemplate, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(projectdetailtemplate.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(projectdetailtemplate.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(projectdetailtemplate, detaching);
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
	validate_slots("Di_repairs", slots, []);

	let STATE = {
		metaTitle: `DI Repairs | Front End Developer - Joshua Roper`,
		title: `DI Repairs`,
		url: "https://www.direpairs.com/",
		description: `As the <strong>only developer & designer</strong> on this freelance project. I completely re-envisioned the site design & built the project from the ground up as an extremely performant <strong>SSG website</strong>. I utilized development & design best practices with a focus on the <strong>user experience.</strong>`,
		skills: [
			"React",
			"Gatsby Js",
			"Node JS",
			"JavaScript (ES8)",
			"WordPress API",
			"Gravity Forms API",
			"AJAX / JSON",
			"SCSS / SCSS",
			"JSX (HTML WCAG compliant)",
			"PHP",
			"Figma"
		],
		images: [
			{
				src: Image1,
				alt: `A call to action on the home page of the Halcyon Center Mall website`,
				visible: true,
				key: 0
			},
			{
				src: Image2,
				alt: `The home page for Halcyon Center Mall website`,
				visible: false,
				key: 1
			},
			{
				src: Image3,
				alt: `The dining directory page of the Halcyon Center Mall website`,
				visible: false,
				key: 2
			},
			{
				src: Image4,
				alt: `The events directory page of the Halcyon Center Mall website`,
				visible: false,
				key: 3
			},
			{
				src: Image5,
				alt: `A spotlight for businesses on the home page of the Halcyon Center Mall website`,
				visible: false,
				key: 4
			}
		]
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Di_repairs> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		ProjectDetailTemplate,
		Image1,
		Image2,
		Image3,
		Image4,
		Image5,
		STATE
	});

	$$self.$inject_state = $$props => {
		if ("STATE" in $$props) $$invalidate(0, STATE = $$props.STATE);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [STATE];
}

class Di_repairs extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Di_repairs",
			options,
			id: create_fragment.name
		});
	}
}

export default Di_repairs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGktcmVwYWlycy44YzdkYjI4NS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ltYWdlcy9kaS1yZXBhaXJzLzEucG5nIiwiLi4vLi4vLi4vc3JjL2ltYWdlcy9kaS1yZXBhaXJzLzIucG5nIiwiLi4vLi4vLi4vc3JjL2ltYWdlcy9kaS1yZXBhaXJzLzMucG5nIiwiLi4vLi4vLi4vc3JjL2ltYWdlcy9kaS1yZXBhaXJzLzQucG5nIiwiLi4vLi4vLi4vc3JjL2ltYWdlcy9kaS1yZXBhaXJzLzUucG5nIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9qZWN0cy9kaS1yZXBhaXJzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi9jbGllbnQvOWFiZGJjZDIwNDdiOWY2Ny5wbmdcIiIsImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC9lMmE1MzI1NDUxMjlmZjg0LnBuZ1wiIiwiZXhwb3J0IGRlZmF1bHQgXCIvY2xpZW50L2UzMDc3OTJmZWFlZTgyMDgucG5nXCIiLCJleHBvcnQgZGVmYXVsdCBcIi9jbGllbnQvZWJjZDI2YWFjMTc5ODM3Mi5wbmdcIiIsImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC9jYmZkMDYwNDc5ODk2Yzg1LnBuZ1wiIiwiPHNjcmlwdD5cbmltcG9ydCBQcm9qZWN0RGV0YWlsVGVtcGxhdGUgZnJvbSAnLi4vLi4vcm91dGUtbGF5b3V0cy9Qcm9qZWN0RGV0YWlsVGVtcGxhdGUuc3ZlbHRlJztcblxuaW1wb3J0IEltYWdlMSBmcm9tICcuLi8uLi9pbWFnZXMvZGktcmVwYWlycy8xLnBuZyc7XG5pbXBvcnQgSW1hZ2UyIGZyb20gJy4uLy4uL2ltYWdlcy9kaS1yZXBhaXJzLzIucG5nJztcbmltcG9ydCBJbWFnZTMgZnJvbSAnLi4vLi4vaW1hZ2VzL2RpLXJlcGFpcnMvMy5wbmcnO1xuaW1wb3J0IEltYWdlNCBmcm9tICcuLi8uLi9pbWFnZXMvZGktcmVwYWlycy80LnBuZyc7XG5pbXBvcnQgSW1hZ2U1IGZyb20gJy4uLy4uL2ltYWdlcy9kaS1yZXBhaXJzLzUucG5nJztcblxubGV0IFNUQVRFID0ge1xuICAgIG1ldGFUaXRsZTogYERJIFJlcGFpcnMgfCBGcm9udCBFbmQgRGV2ZWxvcGVyIC0gSm9zaHVhIFJvcGVyYCxcbiAgICB0aXRsZTogYERJIFJlcGFpcnNgLFxuICAgIHVybDogJ2h0dHBzOi8vd3d3LmRpcmVwYWlycy5jb20vJyxcbiAgICBkZXNjcmlwdGlvbjogYEFzIHRoZSA8c3Ryb25nPm9ubHkgZGV2ZWxvcGVyICYgZGVzaWduZXI8L3N0cm9uZz4gb24gdGhpcyBmcmVlbGFuY2UgcHJvamVjdC4gSSBjb21wbGV0ZWx5IHJlLWVudmlzaW9uZWQgdGhlIHNpdGUgZGVzaWduICYgYnVpbHQgdGhlIHByb2plY3QgZnJvbSB0aGUgZ3JvdW5kIHVwIGFzIGFuIGV4dHJlbWVseSBwZXJmb3JtYW50IDxzdHJvbmc+U1NHIHdlYnNpdGU8L3N0cm9uZz4uIEkgdXRpbGl6ZWQgZGV2ZWxvcG1lbnQgJiBkZXNpZ24gYmVzdCBwcmFjdGljZXMgd2l0aCBhIGZvY3VzIG9uIHRoZSA8c3Ryb25nPnVzZXIgZXhwZXJpZW5jZS48L3N0cm9uZz5gLFxuICAgIHNraWxsczogWydSZWFjdCcsICdHYXRzYnkgSnMnLCAnTm9kZSBKUycsICdKYXZhU2NyaXB0IChFUzgpJywgJ1dvcmRQcmVzcyBBUEknLCAnR3Jhdml0eSBGb3JtcyBBUEknLCAnQUpBWCAvIEpTT04nLCAnU0NTUyAvIFNDU1MnLCAnSlNYIChIVE1MIFdDQUcgY29tcGxpYW50KScsICdQSFAnLCAnRmlnbWEnXSxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBJbWFnZTEsXG4gICAgICAgICAgICBhbHQ6IGBBIGNhbGwgdG8gYWN0aW9uIG9uIHRoZSBob21lIHBhZ2Ugb2YgdGhlIEhhbGN5b24gQ2VudGVyIE1hbGwgd2Vic2l0ZWAsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IEltYWdlMixcbiAgICAgICAgICAgIGFsdDogYFRoZSBob21lIHBhZ2UgZm9yIEhhbGN5b24gQ2VudGVyIE1hbGwgd2Vic2l0ZWAsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGtleTogMSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBJbWFnZTMsXG4gICAgICAgICAgICBhbHQ6IGBUaGUgZGluaW5nIGRpcmVjdG9yeSBwYWdlIG9mIHRoZSBIYWxjeW9uIENlbnRlciBNYWxsIHdlYnNpdGVgLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogSW1hZ2U0LFxuICAgICAgICAgICAgYWx0OiBgVGhlIGV2ZW50cyBkaXJlY3RvcnkgcGFnZSBvZiB0aGUgSGFsY3lvbiBDZW50ZXIgTWFsbCB3ZWJzaXRlYCxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAga2V5OiAzLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IEltYWdlNSxcbiAgICAgICAgICAgIGFsdDogYEEgc3BvdGxpZ2h0IGZvciBidXNpbmVzc2VzIG9uIHRoZSBob21lIHBhZ2Ugb2YgdGhlIEhhbGN5b24gQ2VudGVyIE1hbGwgd2Vic2l0ZWAsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGtleTogNCxcbiAgICAgICAgfSwgXG4gICAgXVxufVxuXG48L3NjcmlwdD5cblxuXG48UHJvamVjdERldGFpbFRlbXBsYXRlIFNUQVRFPXtTVEFURX0gLz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGFBQWU7O0FDQWYsYUFBZTs7QUNBZixhQUFlOztBQ0FmLGFBQWU7O0FDQWYsYUFBZTs7Ozs7Ozs7OzZCQ29EZSxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EzQy9CLEtBQUs7RUFDTCxTQUFTO0VBQ1QsS0FBSztFQUNMLEdBQUcsRUFBRSw0QkFBNEI7RUFDakMsV0FBVztFQUNYLE1BQU07R0FBRyxPQUFPO0dBQUUsV0FBVztHQUFFLFNBQVM7R0FBRSxrQkFBa0I7R0FBRSxlQUFlO0dBQUUsbUJBQW1CO0dBQUUsYUFBYTtHQUFFLGFBQWE7R0FBRSwyQkFBMkI7R0FBRSxLQUFLO0dBQUUsT0FBTzs7RUFDN0ssTUFBTTs7SUFFRSxHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUc7SUFDSCxPQUFPLEVBQUUsSUFBSTtJQUNiLEdBQUcsRUFBRSxDQUFDOzs7SUFHTixHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUc7SUFDSCxPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxDQUFDOzs7SUFHTixHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUc7SUFDSCxPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxDQUFDOzs7SUFHTixHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUc7SUFDSCxPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxDQUFDOzs7SUFHTixHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUc7SUFDSCxPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
