<template>
    <!-- HISTORY -->
    <section id="history" style="margin-bottom:2rem">
        <div class="page-title shadow rounded bg-secondary bg-gradient">
            <h3>Movie Database History</h3>
        </div>

        <div class = 'card'>
            <div class= "card-body" style="overflow-x: scroll">
                <h2 id='movieHistoryRemark' style='color:red'></h2>
                <table id="historyTable" style="overflow-x: auto" class="table table-striped table-hover tableHistory table-responsive" >
                    <thead class='table-primary'>
                        <tr>
                            <th style="text-align:center">No.</th>
                            <th style="text-align:center">Movie Title</th>
                            <th style="text-align:center">Description</th>
                            <th style="text-align:center">By</th>
                            <th style="text-align:center">Created At</th>
                        </tr>
                    </thead>
                    <tbody id="movieHistory">  
                        <HistoryTableRow v-for="(history, index) in histories" :history="history" :index="index" :histories="histories" :key="history.id"></HistoryTableRow>
                    </tbody>
                </table>
            </div>
        </div>
    </section>                

</template>

<script>
import HistoryTableRow from '../tablerows/HistoryTableRow.vue'
export default {
    name:'HistoryTable',
    components: { HistoryTableRow },
    props: ["histories"],
    data() {
        return {
            msg: 'ini History Table'
        }
    }
}
</script>

<style>

</style>