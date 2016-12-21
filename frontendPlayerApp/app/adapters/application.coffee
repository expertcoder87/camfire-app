`import ActiveModelAdapter from 'active-model-adapter'`
`import constants from 'frontend-upgrade/utils/constants'`

ApplicationAdapter = ActiveModelAdapter.extend(
	namespace: constants.NAMESPACE,
	coalesceFindRequests: true
	host: "http://52.27.156.129:3000"
)

`export default ApplicationAdapter`
