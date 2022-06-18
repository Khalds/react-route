import React from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const containerStyle = {
  width: "100vh",
  height: "500px",
}

const center = {
  lat: 43.32482454650201,
  lng: 45.69243845664348,
}

//AIzaSyAEIiobuRIsymBuUipmAJSchGDnZenBjq4

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAEIiobuRIsymBuUipmAJSchGDnZenBjq4">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
