<script type="javascript">
  document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evitar canvi de URL
    const target = document.querySelector(this.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
</script>