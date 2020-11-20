declare module '*.css';
declare module '*.less';
declare module '*.gif';
declare module '*.jpg';
declare module '*.png';
// declare module '*.svg';

declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
