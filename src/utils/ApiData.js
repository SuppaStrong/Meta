
const baseUrl= 'https://66.42.50.8';

const  ApiData = {
    fontendUrl:'http://localhost:3000',
    page:`${baseUrl}/wp-json/wp/v2/pages`,
    graphqlUrl:`${baseUrl}/graphql`,
    feedbackUrl:`${baseUrl}/wp-json/custom/v1/feedback-request`,
    headerAndFooterUrl:`${baseUrl}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
}
export default ApiData