import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as create_component, q as claim_component, r as mount_component, n as noop, u as transition_in, w as transition_out, x as destroy_component } from './client.a4c96131.js';
import './PageTitle.442c9193.js';
import { P as ProjectDetailTemplate } from './ProjectDetailTemplate.d81baaca.js';

var Image1 = "/client/2286c80b2548b4f1.jpg";

var Image2 = "/client/8b308574c002984d.jpg";

var Image3 = "/client/b2c8b6df40bc2704.jpg";

var Image4 = "/client/4bc6ce4da6b933c3.jpg";

var Image5 = "/client/997e0e32b40aaba3.jpg";

/* src/routes/projects/creative-revolt.svelte generated by Svelte v3.29.7 */

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
	validate_slots("Creative_revolt", slots, []);

	let STATE = {
		metaTitle: `Creative Revolt | Front End Developer - Joshua Roper`,
		title: `Creative Revolt`,
		url: "https://www.creativerevolt.com/",
		description: `This was a freelance project to <strong>rework the website layout</strong> and tailor the feel of the website to her personal writing style. I <strong>revamped the color palette</strong> to better match her personality, adjusted her website for <strong>SEO</strong>, and created the landing page as well as multiple pages across the platform.`,
		skills: [
			"JavaScript",
			"CSS",
			"HTML",
			"PHP",
			"DiviBuilder",
			"WordPress",
			"SEO",
			"Googe Analytics",
			"Canva",
			"Adobe XD",
			"MailChimp"
		],
		images: [
			{
				src: Image1,
				alt: `The landing page for Creative Revolt`,
				visible: true,
				key: 0
			},
			{
				src: Image2,
				alt: `A call to action setup for Creative Revolt`,
				visible: false,
				key: 1
			},
			{
				src: Image3,
				alt: `The about page for Creative Revolt`,
				visible: false,
				key: 2
			},
			{
				src: Image4,
				alt: `A call to action exculusively design for Creative Revolt`,
				visible: false,
				key: 3
			},
			{
				src: Image5,
				alt: `A page from creative revolt that introduces customers to her their courses`,
				visible: false,
				key: 4
			}
		]
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Creative_revolt> was created with unknown prop '${key}'`);
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

class Creative_revolt extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Creative_revolt",
			options,
			id: create_fragment.name
		});
	}
}

export default Creative_revolt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRpdmUtcmV2b2x0LmE2ZTI3NThlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW1hZ2VzL2NyZWF0aXZlLXJldm9sdC9ob21lLW1pbi5qcGciLCIuLi8uLi8uLi9zcmMvaW1hZ2VzL2NyZWF0aXZlLXJldm9sdC9ob21lLWN0YXMtbWluLmpwZyIsIi4uLy4uLy4uL3NyYy9pbWFnZXMvY3JlYXRpdmUtcmV2b2x0L2Fib3V0LW1pbi5qcGciLCIuLi8uLi8uLi9zcmMvaW1hZ2VzL2NyZWF0aXZlLXJldm9sdC9hYm91dC1jdGEtbWluLmpwZyIsIi4uLy4uLy4uL3NyYy9pbWFnZXMvY3JlYXRpdmUtcmV2b2x0L3dyaXRpbmctY2xhc3MtbWluLmpwZyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJvamVjdHMvY3JlYXRpdmUtcmV2b2x0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi9jbGllbnQvMjI4NmM4MGIyNTQ4YjRmMS5qcGdcIiIsImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC84YjMwODU3NGMwMDI5ODRkLmpwZ1wiIiwiZXhwb3J0IGRlZmF1bHQgXCIvY2xpZW50L2IyYzhiNmRmNDBiYzI3MDQuanBnXCIiLCJleHBvcnQgZGVmYXVsdCBcIi9jbGllbnQvNGJjNmNlNGRhNmI5MzNjMy5qcGdcIiIsImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC85OTdlMGUzMmI0MGFhYmEzLmpwZ1wiIiwiPHNjcmlwdD5cbmltcG9ydCBQcm9qZWN0RGV0YWlsVGVtcGxhdGUgZnJvbSAnLi4vLi4vcm91dGUtbGF5b3V0cy9Qcm9qZWN0RGV0YWlsVGVtcGxhdGUuc3ZlbHRlJztcblxuaW1wb3J0IEltYWdlMSBmcm9tICcuLi8uLi9pbWFnZXMvY3JlYXRpdmUtcmV2b2x0L2hvbWUtbWluLmpwZyc7XG5pbXBvcnQgSW1hZ2UyIGZyb20gJy4uLy4uL2ltYWdlcy9jcmVhdGl2ZS1yZXZvbHQvaG9tZS1jdGFzLW1pbi5qcGcnO1xuaW1wb3J0IEltYWdlMyBmcm9tICcuLi8uLi9pbWFnZXMvY3JlYXRpdmUtcmV2b2x0L2Fib3V0LW1pbi5qcGcnO1xuaW1wb3J0IEltYWdlNCBmcm9tICcuLi8uLi9pbWFnZXMvY3JlYXRpdmUtcmV2b2x0L2Fib3V0LWN0YS1taW4uanBnJztcbmltcG9ydCBJbWFnZTUgZnJvbSAnLi4vLi4vaW1hZ2VzL2NyZWF0aXZlLXJldm9sdC93cml0aW5nLWNsYXNzLW1pbi5qcGcnO1xuXG5sZXQgU1RBVEUgPSB7XG4gICAgbWV0YVRpdGxlOiBgQ3JlYXRpdmUgUmV2b2x0IHwgRnJvbnQgRW5kIERldmVsb3BlciAtIEpvc2h1YSBSb3BlcmAsXG4gICAgdGl0bGU6IGBDcmVhdGl2ZSBSZXZvbHRgLFxuICAgIHVybDogJ2h0dHBzOi8vd3d3LmNyZWF0aXZlcmV2b2x0LmNvbS8nLFxuICAgIGRlc2NyaXB0aW9uOiBgVGhpcyB3YXMgYSBmcmVlbGFuY2UgcHJvamVjdCB0byA8c3Ryb25nPnJld29yayB0aGUgd2Vic2l0ZSBsYXlvdXQ8L3N0cm9uZz4gYW5kIHRhaWxvciB0aGUgZmVlbCBvZiB0aGUgd2Vic2l0ZSB0byBoZXIgcGVyc29uYWwgd3JpdGluZyBzdHlsZS4gSSA8c3Ryb25nPnJldmFtcGVkIHRoZSBjb2xvciBwYWxldHRlPC9zdHJvbmc+IHRvIGJldHRlciBtYXRjaCBoZXIgcGVyc29uYWxpdHksIGFkanVzdGVkIGhlciB3ZWJzaXRlIGZvciA8c3Ryb25nPlNFTzwvc3Ryb25nPiwgYW5kIGNyZWF0ZWQgdGhlIGxhbmRpbmcgcGFnZSBhcyB3ZWxsIGFzIG11bHRpcGxlIHBhZ2VzIGFjcm9zcyB0aGUgcGxhdGZvcm0uYCxcbiAgICBza2lsbHM6IFsnSmF2YVNjcmlwdCcsICdDU1MnLCAnSFRNTCcsICdQSFAnLCAnRGl2aUJ1aWxkZXInLCAnV29yZFByZXNzJywgJ1NFTycsICdHb29nZSBBbmFseXRpY3MnLCAnQ2FudmEnLCAnQWRvYmUgWEQnLCAnTWFpbENoaW1wJ10sXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogSW1hZ2UxLFxuICAgICAgICAgICAgYWx0OiBgVGhlIGxhbmRpbmcgcGFnZSBmb3IgQ3JlYXRpdmUgUmV2b2x0YCxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogSW1hZ2UyLFxuICAgICAgICAgICAgYWx0OiBgQSBjYWxsIHRvIGFjdGlvbiBzZXR1cCBmb3IgQ3JlYXRpdmUgUmV2b2x0YCxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAga2V5OiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IEltYWdlMyxcbiAgICAgICAgICAgIGFsdDogYFRoZSBhYm91dCBwYWdlIGZvciBDcmVhdGl2ZSBSZXZvbHRgLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogSW1hZ2U0LFxuICAgICAgICAgICAgYWx0OiBgQSBjYWxsIHRvIGFjdGlvbiBleGN1bHVzaXZlbHkgZGVzaWduIGZvciBDcmVhdGl2ZSBSZXZvbHRgLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogSW1hZ2U1LFxuICAgICAgICAgICAgYWx0OiBgQSBwYWdlIGZyb20gY3JlYXRpdmUgcmV2b2x0IHRoYXQgaW50cm9kdWNlcyBjdXN0b21lcnMgdG8gaGVyIHRoZWlyIGNvdXJzZXNgLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6IDQsXG4gICAgICAgIH0sXG4gICAgXVxufVxuXG48L3NjcmlwdD5cblxuXG48UHJvamVjdERldGFpbFRlbXBsYXRlIFNUQVRFPXtTVEFURX0gLz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGFBQWU7O0FDQWYsYUFBZTs7QUNBZixhQUFlOztBQ0FmLGFBQWU7O0FDQWYsYUFBZTs7Ozs7Ozs7OzZCQ29EZSxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EzQy9CLEtBQUs7RUFDTCxTQUFTO0VBQ1QsS0FBSztFQUNMLEdBQUcsRUFBRSxpQ0FBaUM7RUFDdEMsV0FBVztFQUNYLE1BQU07R0FBRyxZQUFZO0dBQUUsS0FBSztHQUFFLE1BQU07R0FBRSxLQUFLO0dBQUUsYUFBYTtHQUFFLFdBQVc7R0FBRSxLQUFLO0dBQUUsaUJBQWlCO0dBQUUsT0FBTztHQUFFLFVBQVU7R0FBRSxXQUFXOztFQUNuSSxNQUFNOztJQUVFLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRztJQUNILE9BQU8sRUFBRSxJQUFJO0lBQ2IsR0FBRyxFQUFFLENBQUM7OztJQUdOLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRztJQUNILE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLENBQUM7OztJQUdOLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRztJQUNILE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLENBQUM7OztJQUdOLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRztJQUNILE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLENBQUM7OztJQUdOLEdBQUcsRUFBRSxNQUFNO0lBQ1gsR0FBRztJQUNILE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
