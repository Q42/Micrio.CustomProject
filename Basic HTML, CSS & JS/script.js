class Main {
	constructor(){
		this.micrio = document.querySelector('micr-io');
    this.micrio.addEventListener('marker-opened', this.markerOpened.bind(this));
		this.micrio.addEventListener('marker-closed', this.markerClosed.bind(this));
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
window.app = new Main();
