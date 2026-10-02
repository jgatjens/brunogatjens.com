import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ResumeIcon(props: IconProps) {
  return (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><path d="M7 17H6a4 4 0 0 1-1-7.9A7 7 0 0 1 18 8a4.5 4.5 0 0 1 0 9h-1M12 11v10m-4-4 4 4 4-4" /></svg>);
}

export function CopyrightIcon(props: IconProps) {
  return (<svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 14, height: 14 }} {...props}><path d="M6 4.66667H7.33334C7.51015 4.66667 7.67972 4.7369 7.80474 4.86193C7.92977 4.98695 8 5.15652 8 5.33333C8 5.51014 8.07024 5.67971 8.19527 5.80474C8.32029 5.92976 8.48986 6 8.66667 6C8.84348 6 9.01305 5.92976 9.13807 5.80474C9.2631 5.67971 9.33334 5.51014 9.33334 5.33333C9.33334 4.8029 9.12262 4.29419 8.74755 3.91912C8.37248 3.54405 7.86377 3.33333 7.33334 3.33333H6C5.46957 3.33333 4.96086 3.54405 4.58579 3.91912C4.21072 4.29419 4 4.8029 4 5.33333V8C4 8.53043 4.21072 9.03914 4.58579 9.41421C4.96086 9.78929 5.46957 10 6 10H7.33334C7.86377 10 8.37248 9.78929 8.74755 9.41421C9.12262 9.03914 9.33334 8.53043 9.33334 8C9.33334 7.82319 9.2631 7.65362 9.13807 7.5286C9.01305 7.40357 8.84348 7.33333 8.66667 7.33333C8.48986 7.33333 8.32029 7.40357 8.19527 7.5286C8.07024 7.65362 8 7.82319 8 8C8 8.17681 7.92977 8.34638 7.80474 8.4714C7.67972 8.59643 7.51015 8.66667 7.33334 8.66667H6C5.82319 8.66667 5.65362 8.59643 5.5286 8.4714C5.40357 8.34638 5.33334 8.17681 5.33334 8V5.33333C5.33334 5.15652 5.40357 4.98695 5.5286 4.86193C5.65362 4.7369 5.82319 4.66667 6 4.66667V4.66667ZM6.66667 0C5.34813 0 4.0592 0.390993 2.96287 1.12354C1.86654 1.85608 1.01206 2.89727 0.507473 4.11544C0.00288856 5.33362 -0.129134 6.67406 0.128101 7.96727C0.385336 9.26047 1.02027 10.4484 1.95262 11.3807C2.88497 12.3131 4.07286 12.948 5.36607 13.2052C6.65927 13.4625 7.99972 13.3304 9.21789 12.8259C10.4361 12.3213 11.4773 11.4668 12.2098 10.3705C12.9423 9.27414 13.3333 7.98521 13.3333 6.66667C13.3333 5.79119 13.1609 4.92428 12.8259 4.11544C12.4908 3.30661 11.9998 2.57168 11.3807 1.95262C10.7617 1.33356 10.0267 0.842501 9.21789 0.50747C8.40906 0.172438 7.54215 0 6.66667 0V0ZM6.66667 12C5.61184 12 4.58069 11.6872 3.70363 11.1012C2.82657 10.5151 2.14298 9.68218 1.73931 8.70764C1.33565 7.73311 1.23003 6.66075 1.43582 5.62618C1.6416 4.59162 2.14955 3.64131 2.89543 2.89543C3.64131 2.14955 4.59162 1.6416 5.62619 1.43581C6.66075 1.23002 7.73311 1.33564 8.70765 1.73931C9.68219 2.14298 10.5151 2.82656 11.1012 3.70363C11.6872 4.58069 12 5.61183 12 6.66667C12 8.08115 11.4381 9.43771 10.4379 10.4379C9.43771 11.4381 8.08116 12 6.66667 12V12Z" fill="var(--color-copyright, #22212C)" /></svg>);
}

export function LocationIcon(props: IconProps) {
  return (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>);
}

export function InfoIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <><circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10v1" /></>
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 7h14M5 17h14" /></>
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <><rect x="3" y="3" width="18" height="18" rx="1" fill="currentColor" stroke="none" /><path d="M7 10v7m0-10v1m4 9v-7m0 3c0-4 6-4 6 0v4" stroke="var(--color-background)" strokeWidth="2" /></>
    </svg>
  );
}

export function DribbbleIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <><circle cx="12" cy="12" r="9" /><path d="M7 4c6 7 8 12 9 16M3 11c8 1 13-2 16-6M5 19c3-6 7-9 16-7" /></>
    </svg>
  );
}

export function BehanceIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.47461 14.0667L2.91628 16.55C3.19961 17.1167 3.78294 17.5 4.44128 17.5H13.9913L12.0246 14.0667H1.47461ZM18.5246 14.0833C18.5246 13.75 18.4246 13.425 18.2496 13.15L12.6413 3.41667C12.3496 2.86667 11.7913 2.5 11.1246 2.5H8.16628L16.8163 17.5L18.1829 15.1167C18.4413 14.6667 18.5246 14.4667 18.5246 14.0833ZM10.6079 11.6167L6.74961 4.93333L2.87461 11.6167H10.6079Z" fill="currentColor" />
    </svg>

  );
}

export function XIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3 3h5l13 18h-5zM21 3 3 21" />
    </svg>
  );
}

