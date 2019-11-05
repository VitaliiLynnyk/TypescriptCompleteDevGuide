import { Mappable } from './Mappable';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
      center: { lat: 0, lng: 0 },
      zoom: 1
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infowindow.open(this.googleMap, marker);
    });
  }
}
