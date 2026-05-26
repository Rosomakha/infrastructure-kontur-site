import { OGV_SERVICE_GEO, OGV_SERVICE_PURPOSE } from "@/lib/site";

export function OgvServiceNotice() {
  return (
    <div className="info-strip ogv-service-notice">
      <p>
        <strong>Для органов власти — по всей России.</strong> {OGV_SERVICE_GEO}
      </p>
      <p>{OGV_SERVICE_PURPOSE}</p>
    </div>
  );
}
