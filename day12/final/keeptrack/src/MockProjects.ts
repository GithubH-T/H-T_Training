import { Project } from './project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'Johnson-kutch',
    description: 'Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTyped: 3,
    contractSignedOn: '2013-08-04T22:39:41.473Z',
    budget: 54637,
    isActive: false,
  }),
  new Project({
      id: 2,
      name: 'Wisozk Group',
      description: 'Centralized interactive application. Exercitationem nulla ut ipsam vero quasi enim quos doloribus voluptatibus.',
      imageUrl: '/assets/placeimg_500_300_arch1.jpg',
      contractTypeId: 4,
      contractSignedOn: '2012-08-06T21:21:31.419Z',
      budget: 91638,
      isActive: true,
  }),
  new Project({
      id: 3,
      name: 'Denesik LLC',
    description:
      'Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 6,
    contractSignedOn: '2016-06-26T18:24:01.706Z',
    budget: 29729,
    isActive: true,
  }),
];