import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const GalleryImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const OopsMessage = styled.div`
  background-color: #8e3c59;
  border-radius: 15px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  color: #eed3dd;
  padding: 30px 20px;
`;
