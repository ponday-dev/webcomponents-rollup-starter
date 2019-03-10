declare module "*.scss" {
    import { css, CSSResult } from 'lit-element';
    const style: (params: { css: typeof css }) => CSSResult;
    export default style;
}
