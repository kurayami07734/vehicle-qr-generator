<script>
    export let name;
    export let description;
    export let position;
    export let inlink;
    export let github;
    export let image;
    import Icon from '@iconify/svelte';
</script>
<div class="card">
    <div class="team-image-wrapper">
      <img class="team-member-image" src={image} alt={name}>
    </div>
    <p class="text-blk name">
        {name}
    </p>
    <p class="text-blk position">
        {position}
    </p>
    <p class="text-blk feature-text">
        {description}
    </p>
    <div class="social-icons">
      <a href={inlink} target="_blank">
        <Icon icon="skill-icons:linkedin" />
      </a>
      <a href={github} target="_blank">
        <Icon icon="pajamas:github" />
      </a>
    </div>
  </div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&amp;display=swap');
    .text-blk {
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        line-height: 25px;
    }
    .card {
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 7px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        padding-right: 25px;
        padding-bottom: 30px;
        padding-left: 25px;
    }

    .name {
        margin-top: 20px;
        margin-right: 0px;
        margin-bottom: 5px;
        margin-left: 0px;
        font-size: 18px;
        font-weight: 800;
    }

    .position {
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 10px;
        margin-left: 0px;
    }

    .feature-text {
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 20px;
        margin-left: 0px;
        color: rgb(122, 122, 122);
        line-height: 30px;
    }

    .social-icons {
        width: 70px;
        display: flex;
        justify-content: space-between;
    }

    .team-image-wrapper {
        clip-path: circle(50% at 50% 50%);
        width: 130px;
        height: 130px;
    }

    .team-member-image {
        max-width: 100%;
    }

</style>