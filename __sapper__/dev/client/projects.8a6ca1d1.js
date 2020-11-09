import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, k as space, e as element, p as create_component, y as query_selector_all, b as detach_dev, m as claim_space, c as claim_element, a as children, q as claim_component, f as attr_dev, g as add_location, h as insert_dev, r as mount_component, j as append_dev, n as noop, u as transition_in, w as transition_out, x as destroy_component } from './client.c252364f.js';
import { P as Projects } from './Projects.8219e1fb.js';
import { P as PageTitle } from './PageTitle.e958bcf0.js';

/* src/routes/projects.svelte generated by Svelte v3.29.4 */
const file = "src/routes/projects.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let pagetitle;
	let t1;
	let projects;
	let current;

	pagetitle = new PageTitle({
			props: { title: "Projects" },
			$$inline: true
		});

	projects = new Projects({
			props: {
				portfolioCards: /*portfolioCards*/ ctx[0]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			create_component(pagetitle.$$.fragment);
			t1 = space();
			create_component(projects.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-15vlb29\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(pagetitle.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(projects.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Projects | Front End Developer - Joshua Roper";
			attr_dev(div, "class", "container svelte-12cipmd");
			add_location(div, file, 65, 0, 3731);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(pagetitle, div, null);
			append_dev(div, t1);
			mount_component(projects, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(pagetitle.$$.fragment, local);
			transition_in(projects.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(pagetitle.$$.fragment, local);
			transition_out(projects.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_component(pagetitle);
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

	let portfolioCards = [
		{
			url: "/projects/halcyon",
			imgSrc: "thumbnails/halcyon-5-min.jpg",
			alt: "Thumbnail for the Halcyon mall website rebuild",
			projectName: "Halcyon",
			projectYear: "2019",
			projectText: `I was one of the Front End Developers on the project primarily tasked with creating the movies page and events directory. Across the project I worked with <strong>multiple API’s</strong>, <strong>React Static</strong>, and developed <strong>clean code</strong> for other advanced React components.`
		},
		{
			url: "/projects/di-repairs",
			imgSrc: "thumbnails/di-thumb.jpg",
			alt: "Thumbnail for the City of University Park complete Front End website redesign",
			projectName: "DI Repairs",
			projectYear: "2020",
			projectText: `As the <strong>only developer & designer</strong> on this freelance project. I completely re-envisioned the site design & built the project from the ground up as an extremely performant <strong>SSG website</strong>. I utilized development & design best practices with a focus on the <strong>user experience.</strong>`
		},
		{
			url: "projects/stallion",
			imgSrc: "thumbnails/stallion-thumb-a-min.jpg",
			alt: "Thumbnail for the Stallion complete website rebuild",
			projectName: "Stallion",
			projectYear: "2019",
			projectText: `As the <strong>Lead Front End Developer</strong> on a <strong>complete website rebuild</strong>, I worked towards envisioning a website that would match their innovative Stallion attitude. The project was built with an <strong>emphasis</strong> on <strong>clean code</strong>, and <strong>modularity.</strong> The website includes multiple API’s, form verification, and other advanced modules.`
		},
		{
			url: "/projects/university-park",
			imgSrc: "thumbnails/uptexas-thumb-min.jpg",
			alt: "Thumbnail for the City of University Park complete Front End website redesign",
			projectName: "University Park",
			projectYear: "2019",
			projectText: `I was tasked with being the <strong>sole developer</strong> on a <strong>complete Front-End redesign</strong>. Keeping their current users in mind, the goal was to make the website feel more modern, and offer a better user experience when navigating to each individual page. Across the entire project I implemented several dynamically generated content pages / sliders, <strong>form verification</strong>, and several <strong>third party integrations</strong>.`
		},
		{
			url: "projects/creative-revolt",
			imgSrc: "thumbnails/Jorden-Background-Gray-min.jpg",
			alt: "Thumbnail for the Creative Revolt redesigned website",
			projectName: "Creative Revolt",
			projectYear: "2018",
			projectText: `This was a freelance project to <strong>rework the website layout</strong> and tailor the feel of the website to her personal writing style. I <strong>revamped the color palette</strong> to better match her personality, adjusted her website for <strong>SEO</strong>, and created the landing page as well as multiple pages across the platform.`
		}
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Projects> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Projects, PageTitle, portfolioCards });

	$$self.$inject_state = $$props => {
		if ("portfolioCards" in $$props) $$invalidate(0, portfolioCards = $$props.portfolioCards);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [portfolioCards];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuOGE2Y2ExZDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJvamVjdHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS1jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzLnN2ZWx0ZSc7XG4gICAgaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsLWNvbXBvbmVudHMvUGFnZVRpdGxlLnN2ZWx0ZSc7XG5cblxuICAgIGxldCBwb3J0Zm9saW9DYXJkcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsOiAnL3Byb2plY3RzL2hhbGN5b24nLFxuICAgICAgICAgICAgaW1nU3JjOiAndGh1bWJuYWlscy9oYWxjeW9uLTUtbWluLmpwZycsXG4gICAgICAgICAgICBhbHQ6ICdUaHVtYm5haWwgZm9yIHRoZSBIYWxjeW9uIG1hbGwgd2Vic2l0ZSByZWJ1aWxkJyxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnSGFsY3lvbicsXG4gICAgICAgICAgICBwcm9qZWN0WWVhcjogJzIwMTknLFxuICAgICAgICAgICAgcHJvamVjdFRleHQ6IGBJIHdhcyBvbmUgb2YgdGhlIEZyb250IEVuZCBEZXZlbG9wZXJzIG9uIHRoZSBwcm9qZWN0IHByaW1hcmlseSB0YXNrZWQgd2l0aCBjcmVhdGluZyB0aGUgbW92aWVzIHBhZ2UgYW5kIGV2ZW50cyBkaXJlY3RvcnkuIEFjcm9zcyB0aGUgcHJvamVjdCBJIHdvcmtlZCB3aXRoIDxzdHJvbmc+bXVsdGlwbGUgQVBJ4oCZczwvc3Ryb25nPiwgPHN0cm9uZz5SZWFjdCBTdGF0aWM8L3N0cm9uZz4sIGFuZCBkZXZlbG9wZWQgPHN0cm9uZz5jbGVhbiBjb2RlPC9zdHJvbmc+IGZvciBvdGhlciBhZHZhbmNlZCBSZWFjdCBjb21wb25lbnRzLmBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsOiAnL3Byb2plY3RzL2RpLXJlcGFpcnMnLFxuICAgICAgICAgICAgaW1nU3JjOiAndGh1bWJuYWlscy9kaS10aHVtYi5qcGcnLFxuICAgICAgICAgICAgYWx0OiAnVGh1bWJuYWlsIGZvciB0aGUgQ2l0eSBvZiBVbml2ZXJzaXR5IFBhcmsgY29tcGxldGUgRnJvbnQgRW5kIHdlYnNpdGUgcmVkZXNpZ24nLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdESSBSZXBhaXJzJyxcbiAgICAgICAgICAgIHByb2plY3RZZWFyOiAnMjAyMCcsXG4gICAgICAgICAgICBwcm9qZWN0VGV4dDogYEFzIHRoZSA8c3Ryb25nPm9ubHkgZGV2ZWxvcGVyICYgZGVzaWduZXI8L3N0cm9uZz4gb24gdGhpcyBmcmVlbGFuY2UgcHJvamVjdC4gSSBjb21wbGV0ZWx5IHJlLWVudmlzaW9uZWQgdGhlIHNpdGUgZGVzaWduICYgYnVpbHQgdGhlIHByb2plY3QgZnJvbSB0aGUgZ3JvdW5kIHVwIGFzIGFuIGV4dHJlbWVseSBwZXJmb3JtYW50IDxzdHJvbmc+U1NHIHdlYnNpdGU8L3N0cm9uZz4uIEkgdXRpbGl6ZWQgZGV2ZWxvcG1lbnQgJiBkZXNpZ24gYmVzdCBwcmFjdGljZXMgd2l0aCBhIGZvY3VzIG9uIHRoZSA8c3Ryb25nPnVzZXIgZXhwZXJpZW5jZS48L3N0cm9uZz5gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6ICdwcm9qZWN0cy9zdGFsbGlvbicsXG4gICAgICAgICAgICBpbWdTcmM6ICd0aHVtYm5haWxzL3N0YWxsaW9uLXRodW1iLWEtbWluLmpwZycsXG4gICAgICAgICAgICBhbHQ6ICdUaHVtYm5haWwgZm9yIHRoZSBTdGFsbGlvbiBjb21wbGV0ZSB3ZWJzaXRlIHJlYnVpbGQnLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdTdGFsbGlvbicsXG4gICAgICAgICAgICBwcm9qZWN0WWVhcjogJzIwMTknLFxuICAgICAgICAgICAgcHJvamVjdFRleHQ6IGBBcyB0aGUgPHN0cm9uZz5MZWFkIEZyb250IEVuZCBEZXZlbG9wZXI8L3N0cm9uZz4gb24gYSA8c3Ryb25nPmNvbXBsZXRlIHdlYnNpdGUgcmVidWlsZDwvc3Ryb25nPiwgSSB3b3JrZWQgdG93YXJkcyBlbnZpc2lvbmluZyBhIHdlYnNpdGUgdGhhdCB3b3VsZCBtYXRjaCB0aGVpciBpbm5vdmF0aXZlIFN0YWxsaW9uIGF0dGl0dWRlLiBUaGUgcHJvamVjdCB3YXMgYnVpbHQgd2l0aCBhbiA8c3Ryb25nPmVtcGhhc2lzPC9zdHJvbmc+IG9uIDxzdHJvbmc+Y2xlYW4gY29kZTwvc3Ryb25nPiwgYW5kIDxzdHJvbmc+bW9kdWxhcml0eS48L3N0cm9uZz4gVGhlIHdlYnNpdGUgaW5jbHVkZXMgbXVsdGlwbGUgQVBJ4oCZcywgZm9ybSB2ZXJpZmljYXRpb24sIGFuZCBvdGhlciBhZHZhbmNlZCBtb2R1bGVzLmAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybDogJy9wcm9qZWN0cy91bml2ZXJzaXR5LXBhcmsnLFxuICAgICAgICAgICAgaW1nU3JjOiAndGh1bWJuYWlscy91cHRleGFzLXRodW1iLW1pbi5qcGcnLFxuICAgICAgICAgICAgYWx0OiAnVGh1bWJuYWlsIGZvciB0aGUgQ2l0eSBvZiBVbml2ZXJzaXR5IFBhcmsgY29tcGxldGUgRnJvbnQgRW5kIHdlYnNpdGUgcmVkZXNpZ24nLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdVbml2ZXJzaXR5IFBhcmsnLFxuICAgICAgICAgICAgcHJvamVjdFllYXI6ICcyMDE5JyxcbiAgICAgICAgICAgIHByb2plY3RUZXh0OiBgSSB3YXMgdGFza2VkIHdpdGggYmVpbmcgdGhlIDxzdHJvbmc+c29sZSBkZXZlbG9wZXI8L3N0cm9uZz4gb24gYSA8c3Ryb25nPmNvbXBsZXRlIEZyb250LUVuZCByZWRlc2lnbjwvc3Ryb25nPi4gS2VlcGluZyB0aGVpciBjdXJyZW50IHVzZXJzIGluIG1pbmQsIHRoZSBnb2FsIHdhcyB0byBtYWtlIHRoZSB3ZWJzaXRlIGZlZWwgbW9yZSBtb2Rlcm4sIGFuZCBvZmZlciBhIGJldHRlciB1c2VyIGV4cGVyaWVuY2Ugd2hlbiBuYXZpZ2F0aW5nIHRvIGVhY2ggaW5kaXZpZHVhbCBwYWdlLiBBY3Jvc3MgdGhlIGVudGlyZSBwcm9qZWN0IEkgaW1wbGVtZW50ZWQgc2V2ZXJhbCBkeW5hbWljYWxseSBnZW5lcmF0ZWQgY29udGVudCBwYWdlcyAvIHNsaWRlcnMsIDxzdHJvbmc+Zm9ybSB2ZXJpZmljYXRpb248L3N0cm9uZz4sIGFuZCBzZXZlcmFsIDxzdHJvbmc+dGhpcmQgcGFydHkgaW50ZWdyYXRpb25zPC9zdHJvbmc+LmAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybDogJ3Byb2plY3RzL2NyZWF0aXZlLXJldm9sdCcsXG4gICAgICAgICAgICBpbWdTcmM6ICd0aHVtYm5haWxzL0pvcmRlbi1CYWNrZ3JvdW5kLUdyYXktbWluLmpwZycsXG4gICAgICAgICAgICBhbHQ6ICdUaHVtYm5haWwgZm9yIHRoZSBDcmVhdGl2ZSBSZXZvbHQgcmVkZXNpZ25lZCB3ZWJzaXRlJyxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnQ3JlYXRpdmUgUmV2b2x0JyxcbiAgICAgICAgICAgIHByb2plY3RZZWFyOiAnMjAxOCcsXG4gICAgICAgICAgICBwcm9qZWN0VGV4dDogYFRoaXMgd2FzIGEgZnJlZWxhbmNlIHByb2plY3QgdG8gPHN0cm9uZz5yZXdvcmsgdGhlIHdlYnNpdGUgbGF5b3V0PC9zdHJvbmc+IGFuZCB0YWlsb3IgdGhlIGZlZWwgb2YgdGhlIHdlYnNpdGUgdG8gaGVyIHBlcnNvbmFsIHdyaXRpbmcgc3R5bGUuIEkgPHN0cm9uZz5yZXZhbXBlZCB0aGUgY29sb3IgcGFsZXR0ZTwvc3Ryb25nPiB0byBiZXR0ZXIgbWF0Y2ggaGVyIHBlcnNvbmFsaXR5LCBhZGp1c3RlZCBoZXIgd2Vic2l0ZSBmb3IgPHN0cm9uZz5TRU88L3N0cm9uZz4sIGFuZCBjcmVhdGVkIHRoZSBsYW5kaW5nIHBhZ2UgYXMgd2VsbCBhcyBtdWx0aXBsZSBwYWdlcyBhY3Jvc3MgdGhlIHBsYXRmb3JtLmAsXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIF1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiA2MHB4OyAqL1xuICAgIH1cblxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+UHJvamVjdHMgfCBGcm9udCBFbmQgRGV2ZWxvcGVyIC0gSm9zaHVhIFJvcGVyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cblxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPFBhZ2VUaXRsZSB0aXRsZT17J1Byb2plY3RzJ30gLz5cbiAgICA8UHJvamVjdHMgcG9ydGZvbGlvQ2FyZHM9e3BvcnRmb2xpb0NhcmRzfSAvPlxuPC9kaXY+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBa0VzQixVQUFVOzs7Ozs7dUNBQ0YsR0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E5RHBDLGNBQWM7O0dBRVYsR0FBRyxFQUFFLG1CQUFtQjtHQUN4QixNQUFNLEVBQUUsOEJBQThCO0dBQ3RDLEdBQUcsRUFBRSxnREFBZ0Q7R0FDckQsV0FBVyxFQUFFLFNBQVM7R0FDdEIsV0FBVyxFQUFFLE1BQU07R0FDbkIsV0FBVzs7O0dBR1gsR0FBRyxFQUFFLHNCQUFzQjtHQUMzQixNQUFNLEVBQUUseUJBQXlCO0dBQ2pDLEdBQUcsRUFBRSwrRUFBK0U7R0FDcEYsV0FBVyxFQUFFLFlBQVk7R0FDekIsV0FBVyxFQUFFLE1BQU07R0FDbkIsV0FBVzs7O0dBR1gsR0FBRyxFQUFFLG1CQUFtQjtHQUN4QixNQUFNLEVBQUUscUNBQXFDO0dBQzdDLEdBQUcsRUFBRSxxREFBcUQ7R0FDMUQsV0FBVyxFQUFFLFVBQVU7R0FDdkIsV0FBVyxFQUFFLE1BQU07R0FDbkIsV0FBVzs7O0dBR1gsR0FBRyxFQUFFLDJCQUEyQjtHQUNoQyxNQUFNLEVBQUUsa0NBQWtDO0dBQzFDLEdBQUcsRUFBRSwrRUFBK0U7R0FDcEYsV0FBVyxFQUFFLGlCQUFpQjtHQUM5QixXQUFXLEVBQUUsTUFBTTtHQUNuQixXQUFXOzs7R0FHWCxHQUFHLEVBQUUsMEJBQTBCO0dBQy9CLE1BQU0sRUFBRSwyQ0FBMkM7R0FDbkQsR0FBRyxFQUFFLHNEQUFzRDtHQUMzRCxXQUFXLEVBQUUsaUJBQWlCO0dBQzlCLFdBQVcsRUFBRSxNQUFNO0dBQ25CLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
