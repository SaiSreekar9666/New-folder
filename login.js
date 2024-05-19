document.addEventListener('DOMContentLoaded', function() {
    const propertyForm = document.getElementById('property-form');
    const propertiesList = document.getElementById('properties-list');
    const filterForm = document.getElementById('filter-form');
    const availableProperties = document.getElementById('available-properties');

    // Dummy properties data
    let properties = [];

    propertyForm?.addEventListener('submit', function(event) {
        event.preventDefault();
        const property = {
            place: event.target.place.value,
            area: event.target.area.value,
            bedrooms: event.target.bedrooms.value,
            bathrooms: event.target.bathrooms.value,
            nearby: event.target.nearby.value
        };
        properties.push(property);
        displayProperties(properties, propertiesList);
        propertyForm.reset();
    });

    filterForm?.addEventListener('submit', function(event) {
        event.preventDefault();
        const filteredProperties = properties.filter(property => {
            return (!event.target.filter-place.value || property.place.includes(event.target.filter-place.value)) &&
                   (!event.target.filter-area.value || property.area >= event.target.filter-area.value) &&
                   (!event.target.filter-bedrooms.value || property.bedrooms >= event.target.filter-bedrooms.value) &&
                   (!event.target.filter-bathrooms.value || property.bathrooms >= event.target.filter-bathrooms.value);
        