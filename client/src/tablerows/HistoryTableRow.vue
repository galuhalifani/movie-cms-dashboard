<template>
    <tr>
        <td style="text-align:center;padding-left:15px;padding-right:20px">{{index + 1}}</td>

        <td style="text-align:center">{{history.title}}</td>

        <td style="padding-left:30px;text-align:center">{{history.description}}</td>

        <td style="text-align:center">{{history.updatedBy}}</td>

        <td style="text-align:center">{{history.createdAt}}</td>
    </tr>
</template>

<script>
export default {
    name: 'HistoryTableRow',
    props: ["histories", "history", "index"],
    data() {
        return {
            msg: 'ini history table'
        }
    },
    methods: {
    }
}
</script>

<style>

</style>