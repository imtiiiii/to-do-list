<template>
	<div>
		<div class="_1main_content">
			<div class="_layout">
				<div class="_layout_row">
					<div class="_log_input_group">
						<Input
							v-model="taskName"
							placeholder="task name"
							size="large"
							type="text"
                            style="padding-left:20px"
						></Input>
					</div>
                    <div class="_log_input_group">
						<Input
							v-model="taskDescription"
							placeholder="task description"
							size="large"
							type="text"
                            style="padding-left:20px"
						></Input>
					</div>
				</div>

				<div>
					<Button
						@click="addTask"
						:loading="isLoading"
						:disabled="isLoading"
						type="primary"
						size="large"
						
						><h4> {{ isLoading ? "Please wait..." : "Add" }} </h4></Button
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			taskName: "",
            taskDescription:"",
			isLoading: false,
		};
	},

	methods: {
		async addTask() {
            this.isLoading=true;
			const getUser=await this.callApi('get','auth/getUser');
            const data={
                user_id:getUser.data.id,
                task_name:this.taskName,
                description:this.taskDescription


            }
            const res=await this.callApi('post','create-task',data);
            this.isLoading=false;
            if(res.status===200)this.s();
            this.taskName=""
            this.taskDescription="";

            
		},
	},

	created() {},
};
</script>