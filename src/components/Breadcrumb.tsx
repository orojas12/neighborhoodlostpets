export interface IBreadcrumbProps {}

export default function Breadcrumb(props: IBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ul role="list">
        <li role="listitem">
          <a href="#">Home</a>
        </li>
        <li role="listitem">
          <div className="fa-solid fa-caret-right"></div>
          <a href="#">Lost &amp; Found</a>
        </li>
        <li role="listitem">
          <div className="fa-solid fa-caret-right"></div>
          <a href="#">
            <span aria-current="page">Report Pet</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
