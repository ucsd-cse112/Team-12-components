//define the css for this component
const jjButton = () => {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
    .btn {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .btn:focus,
    .btn:hover {
      color:#409eff;
      border-color:#c6e2ff;
      background-color:#ecf5ff
    }

    .btn.plain:focus,
    .btn.plain:hover {
      background:#fff;
      border-color:#409eff;
      color:#409eff
    }

    .btn.round {
      border-radius:20px;
      padding:12px 23px
    }

    .btn.circle {
      border-radius:50%;
      padding:12px
    }

    .btn.disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    .btn.text {
      border-color:transparent;
      color:#409eff;
      background:transparent;
      padding-left:0;
      padding-right:0
    }
    .btn.text:focus,
    .btn.text:hover {
      color:#66b1ff;
      border-color:transparent;
      background-color:transparent
    }
    .btn.text:active {
      color:#3a8ee6;
      background-color:transparent
    }

    .btn.medium {
      padding:10px 20px;
      font-size:14px;
      border-radius:4px
    }
    .btn.medium.round {
      padding:10px 20px
    }
    .btn.medium.circle {
      padding:10px
    }
    .btn.small {
      padding:9px 15px;
      font-size:12px;
      border-radius:3px
    }
    .btn.small.round {
      padding:9px 15px
    }
    .btn.small.circle {
      padding:9px
    }
    .btn.mini {
      padding:7px 15px;
      font-size:12px;
      border-radius:3px
    }
    .btn.mini.round {
      padding:7px 15px
    }
    .btn.mini.circle {
      padding:7px
    }

    .primary {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }

    .primary:focus,
    .primary:hover {
      background:#66b1ff;
      border-color:#66b1ff;
      color:#fff
    }

    .primary.plain {
      color:#409eff;
      background:#ecf5ff;
      border-color:#b3d8ff
    }
    .primary.plain:focus,
    .primary.plain:hover {
      background:#409eff;
      border-color:#409eff;
      color:#fff
    }
    .primary.plain:active {
      background:#3a8ee6;
      border-color:#3a8ee6;
      color:#fff;
      outline:none
    }

    .success {
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }

    .success:focus,
    .success:hover {
      background:#85ce61;
      border-color:#85ce61;
      color:#fff
    }

    .success.plain {
      color:#67c23a;
      background:#f0f9eb;
      border-color:#c2e7b0
    }
    .success.plain:focus,
    .success.plain:hover {
      background:#67c23a;
      border-color:#67c23a;
      color:#fff
    }
    .success.plain:active {
      background:#5daf34;
      border-color:#5daf34;
      color:#fff;
      outline:none
    }

    .info {
      color: #fff;
      background-color: #909399;
      border-color: #909399;
    }

    .info:focus,
    .info:hover {
      background:#a6a9ad;
      border-color:#a6a9ad;
      color:#fff
    }

    .info.plain {
      color:#909399;
      background:#f4f4f5;
      border-color:#d3d4d6
    }
    .info.plain:focus,
    .info.plain:hover {
      background:#909399;
      border-color:#909399;
      color:#fff
    }
    .info.plain:active {
      background:#82848a;
      border-color:#82848a;
      color:#fff;
      outline:none
    }

    .warning {
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
    }

    .warning:focus,
    .warning:hover {
      background:#ebb563;
      border-color:#ebb563;
      color:#fff
    }

    .warning.plain {
      color:#e6a23c;
      background:#fdf6ec;
      border-color:#f5dab1
    }
    .warning.plain:focus,
    .warning.plain:hover {
      background:#e6a23c;
      border-color:#e6a23c;
      color:#fff
    }
    .warning.plain:active {
      background:#cf9236;
      border-color:#cf9236;
      color:#fff;
      outline:none
    }

    .danger {
      color: #fff;
      background-color: #f56c6c;
      border-color: #f56c6c;
    }

    .danger:focus,
    .danger:hover {
      background:#f78989;
      border-color:#f78989;
      color:#fff
    }

    .danger.plain {
      color:#f56c6c;
      background:#fef0f0;
      border-color:#fbc4c4
    }
    .danger.plain:focus,
    .danger.plain:hover {
      background:#f56c6c;
      border-color:#f56c6c;
      color:#fff
    }
    .danger.plain:active {
      background:#dd6161;
      border-color:#dd6161;
      color:#fff;
      outline:none
    }

  </style>
  <button class="btn primary plain"><slot></slot></button> 
  `;

  class JJButton extends HTMLElement {
    static get observedAttributes() {
      return [
        'size', 'type', 'round', 'plain', 'circle', 'loading', 'disabled', 'icon', 'autofocus', 'native-type'
      ];
    }
    constructor () {
      super();
      this.root = this.attachShadow({mode : 'open'});
      this.root.appendChild(template.content.cloneNode(true));

      //define the elements of this component
      this.button = this.root.querySelector('.btn');
      
    }

    connectedCallback() {

    }

    attributeChangedCallback(attrName, oldValue, newValue) {

    }
    //Getters

    //Setters
  }
  customElements.define('jj-button', JJButton);
}
jjButton();