class Main {
	constructor(container){
		this.container = container;
		this.micrio = container.micrio;

    if(this.micrio) setTimeout(() => this.init());
		else window.addEventListener('micrio-created', e => {
			if(!this._container) this._container = e.detail.container;
			if(!this.micrio) this.micrio = e.detail;
			setTimeout(() => this.init());
		});
  }

  init() {
    this.micrio.addEventListener('metadata', this.metadata.bind(this));
    this.micrio.addEventListener('marker-opened', this.markerOpened.bind(this));
		this.micrio.addEventListener('marker-closed', this.markerClosed.bind(this));
  }
  
  // micrio metadata loaded
  metadata(e) {
    const detail = e.detail;
    console.log('metadata loaded', detail);
  }

  // fires when a  marker is opened
  markerOpened(e) {
    const marker = e.detail;
    console.log(`marker ${marker.title} opened`, marker);

    // now you can also manipulate some marker settings, such as static popup which makes customizing the location much easier!
    marker.data.staticPopup = true;
  }

  // fires when a marker is closed
  markerClosed(e) {
    const marker = e.detail.data;
    console.log(`marker ${marker.title} closed`, marker);
  }
}

// Init call
window.main = new Main(document.querySelector('micr-io'));
