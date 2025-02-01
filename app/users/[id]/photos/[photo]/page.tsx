import React from "react";

interface Props {
  params: { id: number; photo: number };
}

const PhotoPage = ({ params: { id, photo } }: Props) => {
  return (
    <div>
      PhotoPage {id} {photo}
    </div>
  );
};

export default PhotoPage;
