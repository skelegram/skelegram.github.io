// Browser
const canvas = document.getElementById('background');
const pattern = new PerlinNoisePattern({ 
  /** Text color for rendered characters */
    color: string,
    /** Whether animation is enabled */
    animated: boolean,
    /** Animation speed multiplier */
    animationSpeed: number,
    /** Font size in pixels */
    fontSize: number,
    /** Font family to use for rendering */
    fontFamily: string,
    /** Background color */
    backgroundColor: string,
    /** Padding around the rendered area */
    padding: number,
    /** Renderer type to use */
    rendererType: '2D' | 'WebGL',
    /** Enable mouse interaction support */
    enableMouseInteraction: boolean,
    /** Horizontal spacing between characters. If not specified, auto-calculated based on character width */
    charSpacingX: number,
    /** Vertical spacing between characters. If not specified, auto-calculated based on character height */
    charSpacingY: number,
    /** Resize target for the renderer, defaults to window. */
    resizeTo: Window | HTMLElement
});
const asciiGround = new ASCIIGround()
.init(canvas, pattern, { 
  // options here
})
.startAnimation();