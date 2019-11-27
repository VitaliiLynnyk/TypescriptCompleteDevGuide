import { User } from './../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.click': this.onButtonClick,
      'click:.set-age': this.onSetAgeClick
    };
  }

  onSetAgeClick(): void {
    console.log('set age');
  }

  onButtonClick(): void {
    console.log('click');
  }

  template(): string {
    return `
      <div>
        <h1> User Form </h1>
        <button class="click">click me</button>
        <button class="set-age">set random age</button>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(e => {
        e.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
