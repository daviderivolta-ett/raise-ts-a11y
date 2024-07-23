var c=Object.defineProperty;var d=(i,o,r)=>o in i?c(i,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[o]=r;var l=(i,o,r)=>(d(i,typeof o!="symbol"?o+"":o,r),r);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="/raise-ts-a11y/images/RAISE_pictogram_no_bg.svg";class p extends HTMLElement{constructor(){super();l(this,"shadowRoot");this.shadowRoot=this.attachShadow({mode:"closed"})}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="logo-wrapper">
                <img src="${u}" alt="Logo di RAISE" class="logo">
            </div>
            <div class="header">
                <h1>Benvenuto in RAISE</h1>
                <p class="desc">Hai una o più delle seguenti disabilità?</p>
            </div>
            <form>
                <div class="form-content">
                    <div class="checkbox">
                        <input type="checkbox" id="blind" name="a11y" value="blind">
                        <label for="blind" aria-label="cecità">Cecità</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="vi" name="a11y" value="vi">
                        <label for="vi" aria-label="ipovisione">Ipovisione</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="color-blindness" name="a11y" value="color-blindness">
                        <label for="color-blindness" aria-label="daltonismo">Daltonismo</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="fine-motor" name="a11y" value="fine-motor">
                        <label for="fine-motor" aria-label="problemi di motricità fine">Problemi motricità fine</label>
                    </div>
                </div>                    
                <button type="submit">Continua</button>
            </form>

            <style>
                :host {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    height: 100dvh;
                    padding: 4%;
                }

                .logo-wrapper {
                    text-align: center;
                }

                .logo {
                    width: 48px;
                    height: auto;
                }

                .header {
                    text-align: center;
                    margin: 0 0 24px 0;
                }

                h1 {
                    color: var(--on-surface);
                }

                .desc {
                    color: var(--on-surface-variant);
                }

                form {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    justify-content: space-between;
                }

                .form-content {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                input[type="checkbox"] {
                    position: absolute;
                    height: 0;
                    width: 0;
                    opacity: 0;
                }

                input[type="checkbox"]:checked + label {
                    position: relative;
                    background-color: var(--surface-container-high); 
                    border-color: var(--primary);
                }

                input[type="checkbox"]:checked + label::after {
                    font-family: 'Material Symbols Outlined';
                    font-variation-settings: 'FILL' 1;
                    font-size: 1.4rem;
                    color: var(--primary);
                    content: 'check_circle';
                    position: absolute;
                    right: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                label {
                    cursor: pointer;
                    display: block;
                    width: 100%;
                    padding: 12px;
                    text-align: center;
                    color: var(--on-surface);
                    background-color: var(--surface-container);
                    border: 1px solid var(--outline);
                    border-radius: var(--border-radius-circle);
                    box-sizing: border-box;
                }

                button[type="submit"] {
                    font-family: 'Inter', Arial, Helvetica, sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    width: 100%;
                    border-radius: var(--border-radius-circle);
                    color: var(--on-primary);
                    background-color: var(--primary);
                    padding: 12px;
                    border: 1px solid transparent;
                    box-sizing: border-box;

                    &:hover {
                        opacity: 0.8;
                    }
                }
            </style>
            `}setup(){this.onSubmit()}onSubmit(){const r=this.shadowRoot.querySelector("form");r&&r.addEventListener("submit",n=>{n.preventDefault();const e=new FormData(r);if(e.getAll("a11y").length===0)window.location.href="./raise-ts/";else{let a="?"+e.getAll("a11y").map(s=>`user=${s}`).join("&");window.location.href=`./raise-ts-vi/${a}`}})}}customElements.define("page-onboard",p);
