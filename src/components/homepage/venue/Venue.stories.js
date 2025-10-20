import Venue from './Venue.vue';
import VenueCard from './VenueCard.vue';
export default {
  title: 'HomePage/Venue',
  component: Venue,
  tags: ['autodocs'],
};

export const Card = { 
  render: () => ({
    components: { VenueCard },
    template: '<VenueCard />',
    args: {
      venues: [
          { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形_17.png' }
      ]
    }
  })
}
export const Default = {
  args: {
  },
};