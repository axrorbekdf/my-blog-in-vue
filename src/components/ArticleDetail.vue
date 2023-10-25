<template>
    <div>
        <div class="row">
            <div class="col-12">
                <p class="fs-1">{{ articleDetail.title }}</p>
            </div>
            <div class="col-md-8 col-12 mt-3">
                <p class="font-monospace opacity-75 fw-bold">Description:</p>
                <p>{{ articleDetail.description }}</p>
            </div>
            <div class="col-md-2 col-6 mt-3">
                <p class="font-monospace opacity-75 fw-bold">Created At:</p>
                <small class="text-body-secondary">{{ new Date(articleDetail.createdAt).toLocaleString('us') }}</small>
            </div>
            <div class="col-md-2 col-6 mt-3">
                <p class="font-monospace opacity-75 fw-bold">Updated At:</p>
                <small class="text-body-secondary">{{ new Date(articleDetail.updatedAt).toLocaleString('us') }}</small>
            </div>
            <div class="col-md-4 col-12 mt-3">
                <div class="d-flex align-items-center gap-3">
                    <div class="d-flex justify-content-center align-items-center bg-primary"
                    style="width: 50px; height: 50px; border-radius: 100%;">
                        <span class="text-light text-uppercase fw-bold"> {{ articleDetail.author.username[0] }} </span>
                    </div>
                    <div class="fw-bold">
                        {{ articleDetail.author.username }}
                    </div>
                </div>
                <p class="font-monospace mt-2">{{ articleDetail.author.bio }}</p>
            </div>
            <div class="col-md-8 col-12 mt-3">
                <p class="font-monospace opacity-75 fw-bold">Body:</p>
                <p>{{ articleDetail.body }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        articleDetail:{
            type: Object,
            required: true
        }
    }    
}
</script>
<style>
    
</style>