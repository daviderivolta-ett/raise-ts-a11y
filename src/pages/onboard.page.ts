import logoUrl from '/images/RAISE_pictogram_no_bg.svg';

export class OnboardPage extends HTMLElement {
    public shadowRoot: ShadowRoot;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'closed' });
    }

    public connectedCallback(): void {
        this.render();
        this.setup();
    }

    private render(): void {
        this.shadowRoot.innerHTML =
            `
            <div class="logo-wrapper">
                <img src="${logoUrl}" alt="Logo di RAISE" class="logo">
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
                <div class="buttons-section">
                    <button type="submit" class="secondary-btn">Nessuna</button>
                    <button type="submit" class="primary-btn">Continua</button>
                </div>
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
                    padding: 12px;
                    border: 1px solid transparent;
                    box-sizing: border-box;

                    &:hover {
                        opacity: 0.8;
                    }
                }

                button.primary-btn {
                    color: var(--on-primary);
                    background-color: var(--primary);
                }

                button.secondary-btn {
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                }

                .buttons-section {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            </style>
            `
            ;
    }

    private setup(): void {
        this.onSubmit();
    }

    private onSubmit(): void {
        const form: HTMLFormElement | null = this.shadowRoot.querySelector('form');
        if (!form) return;

        form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            const data: FormData = new FormData(form);

            if (data.getAll('a11y').length === 0) {
                window.location.href = './raise-ts/'
            } else {
                let queryParts: string[] = data.getAll('a11y').map((item: FormDataEntryValue) => `user=${item}`);
                let query : string = '?' + queryParts.join('&');
                window.location.href = `./raise-ts-vi/${query}`;
            }

        });
    }
}

customElements.define('page-onboard', OnboardPage);