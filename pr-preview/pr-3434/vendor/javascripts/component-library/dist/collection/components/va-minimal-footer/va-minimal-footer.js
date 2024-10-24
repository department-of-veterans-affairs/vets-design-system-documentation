import { Host, h } from "@stencil/core";
import vaSeal from "../../assets/va-logo-white.svg";
/**
 * @componentName Minimal Footer
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VAMinimalFooter {
    render() {
        return (h(Host, { key: 'a4822820abde1cd78d803628679f8f5cae71ec4d' }, h("div", { key: 'a9fdbd792c92251996d51cf5da16dc5d276961ea', class: "va-footer" }, h("a", { key: '45f35af8332015ab4e65ae7cc95585edf9681d11', href: "/", title: "Go to VA.gov" }, h("img", { key: '405b1c6d79b73e5fdcda4f84a57e41bedd4482e4', class: "va-logo", src: vaSeal, alt: "VA logo and Seal, U.S. Department of Veterans Affairs" })))));
    }
    static get is() { return "va-minimal-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-minimal-footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-minimal-footer.css"]
        };
    }
}
