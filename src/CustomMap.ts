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
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi'
      });

      infoWindow.open(this.googleMap, infoWindow);
    });
  }
}
