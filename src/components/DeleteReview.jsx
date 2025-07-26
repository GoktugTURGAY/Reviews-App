const DeleteReview = async id => {
  if (confirm('Are you sure you want to delete this review?')) {
    await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    });
  }
};

export default DeleteReview;
