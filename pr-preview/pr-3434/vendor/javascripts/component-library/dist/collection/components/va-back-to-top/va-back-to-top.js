import { Host, h } from "@stencil/core";
import classnames from "classnames";
import "intersection-observer";
/**
 * This component has three main behaviors:
 * 1. Going to the top of the page when the button is clicked
 * 2. "Revealing" after scrolling down far enough
 * 3. "Docking" when the dock becomes visible
 *
 * The span.reveal-point determines when the reveal happens.
 * It uses `position: absolute` so the button will reveal when
 * the `span` is above the viewport.
 */
/**
 * @componentName Back to top
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaBackToTop {
    constructor() {
        this.revealed = false;
        this.isDocked = false;
    }
    componentDidLoad() {
        // Setup observer to handle docking behavior
        const dockObserver = new IntersectionObserver(entries => {
            // The second half of the || ensures that the button
            // stays docked even if the viewport is scrolled below the dock
            this.isDocked =
                entries[0].isIntersecting || entries[0].boundingClientRect.y < 0;
        }, { threshold: 1.0 });
        dockObserver.observe(this.el);
        // Setup observer to handle reveal behavior
        const revealObserver = new IntersectionObserver(entries => {
            this.revealed = entries[0].boundingClientRect.y < 0;
        });
        revealObserver.observe(this.revealPixel);
    }
    navigateToTop(event) {
        event.preventDefault();
        // Focus the h1 tag on the page.
        const el = document.querySelector('h1');
        if (el) {
            // Prepare the element so that it can accept focus properly.
            el.setAttribute('tabindex', '-1');
            el.focus();
            // Cleanup the tabindex on blur.
            el.addEventListener('blur', () => el.removeAttribute('tabindex'));
        }
        // Scroll to the top.
        return window.scrollTo(0, 0);
    }
    render() {
        // This ensures that when the button is revealed but not docked,
        // its width is the same as its parent.
        const undockedWidth = this.el.getBoundingClientRect().width;
        /* eslint-disable-next-line i18next/no-literal-string */
        this.el.style.setProperty('--undocked-width', `${undockedWidth}px`);
        return (h(Host, { key: '6c79ddafe56bc1af5fc2eaf143947ed0b50463bc' }, h("span", { key: '97e7be278d54df2a743aa33956f056abed221cdb', id: "marginWrapper" }, h("span", { key: '7ce3d8a79e5002ee1d8492d4846fba84799d0473', class: "reveal-point", ref: el => (this.revealPixel = el) }), h("div", { key: '633ea54a20e9b44f1b50cb09351a83dab4537c82', class: classnames({ docked: this.isDocked, reveal: this.revealed }) }, h("a", { key: 'e52565d523061bcf8848fca2c95d42fb3486269f', href: "#ds-back-to-top", onClick: this.navigateToTop.bind(this) }, h("span", { key: 'eefaea0d574952a8c5c377d83fd0faa43f5fc2b4' }, h("va-icon", { key: '4951bc24ebc38752b73ecc79d836d0ee7216dab4', icon: "arrow_upward", size: 3 }), h("span", { key: '1c65fdb9291f28f96eae8cd8a7f42991ab9c0530', class: "sr-only" }, "Back to top"), ' ', h("span", { key: '55869c0cdec210e06841f4b3aa089dc708a06d44', class: "text" }, "Back to top")))))));
    }
    static get is() { return "va-back-to-top"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-back-to-top.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-back-to-top.css"]
        };
    }
    static get states() {
        return {
            "revealed": {},
            "isDocked": {}
        };
    }
    static get elementRef() { return "el"; }
}
