export type eventLibType = (
  eventType: string,
  listener: (event: CustomEvent) => void
) => void;

const on: eventLibType = (eventType, listener) => {
  document.addEventListener(eventType, listener as EventListener);
};

const off: eventLibType = (eventType, listener) => {
  document.removeEventListener(eventType, listener as EventListener);
};

const once: eventLibType = (eventType, listener) => {
  const handleEventOnce = (event: CustomEvent): void => {
    listener(event);
    off(eventType, handleEventOnce);
  };

  on(eventType, handleEventOnce);
};

export type triggerType = (eventType: string, data: any) => void;

const trigger: triggerType = (eventType, data) => {
  const event = new CustomEvent(eventType, { detail: data });
  document.dispatchEvent(event);
};

export { on, off, once, trigger };
