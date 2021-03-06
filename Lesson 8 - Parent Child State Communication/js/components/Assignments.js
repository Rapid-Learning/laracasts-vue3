import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [
                { id: 1, name: "Finish project", complete: false },
                { id: 2, name: "Read chapter 6", complete: false },
                { id: 3, name: "Complete homework", complete: false },
            ],
        };
    },

    computed: {
        filters() {
            return {
              inProgress: this.assignments.filter(
                (assignment) => !assignment.complete
              ),
              completed: this.assignments.filter(
                (assignment) => assignment.complete
              ),
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1,
            });
        }
    }
};