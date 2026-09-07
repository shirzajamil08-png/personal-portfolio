export default function Loader({ done }) {
  return (
    <div className={`loader ${done ? "is-done" : ""}`} aria-hidden="true">
      <div className="loader__cube">
        <span /><span /><span /><span /><span /><span />
      </div>
      <p className="loader__text">Rendering the scene…</p>
    </div>
  );
}
