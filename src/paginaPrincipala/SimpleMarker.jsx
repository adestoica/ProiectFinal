import React, { useEffect, useRef } from "react";

const SimpleMarker = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const script = document.createElement("script");
      script.src = ` https://maps.googleapis.com/maps/api/js?key=AIzaSyA99gquJYmHyrEN_IjF2VfY1GiGk4GSgI0&callback=initMap&libraries=maps,marker&v=beta`;
      script.async = true;
      document.head.appendChild(script);

      window.initMap = () => {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 45.6430549621582, lng: 25.586000442504883 },
          zoom: 14,
          mapId: "DEMO_MAP_ID",
        });

        new google.maps.Marker({
          position: { lat: 45.6430549621582, lng: 25.586000442504883 },
          map,
          title: "My location",
        });
      };
    }
  }, []);

  return (
    <div className="h-96">
      <div
        ref={mapRef}
        className="h-5/6 w-8/9  mt-20  border-2  transform transition-transform duration-700 hover:scale-110 "
      ></div>
    </div>
  );
};

export default SimpleMarker;
