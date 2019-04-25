# Home Automation Project

## Home
- Appliances
  - Television
    - Current: Sony KDL-42W674A ME6
    - Future: Sony KD-55A8F
      - https://github.com/breunigs/bravia-auth-and-remote
      - https://blog.breunig.xyz/2014/11/14/remote-control-bravia-tvs-with-authentication.html
  - Speakers
    - Sony BDV-E380 5.1 3D Blu-Ray Home Theatre System
    - Marshall Stanmore Speakers
  - Fans
  - Air Conditioning
  - Window Blinds
    - IKEA?
  - Lights
    - Philips Hue?
    - IKEA TRADFRI?
      - https://github.com/ggravlingen/pytradfri
      - Zigbee protocol
  - Game Console
    - Sony PlayStation 4
- Security
  - User Management
- Sensors
  - Microphones
  - Cameras
  - CO2, Temperature and Humidity Sensor
    - https://sg.rs-online.com/web/p/temperature-sensors-humidity-sensors/1720552/

Web App:
Mobile App:

## Links:
- https://developer.ibm.com/tutorials/learn-nodejs-node-with-cloudant-dbaas/
- https://www.npmjs.com/package/googleapis
- https://docs.run.pivotal.io/devguide/deploy-apps/environment-variable.html
- https://docs.run.pivotal.io/buildpacks/node/node-service-bindings.html
- https://cloud.ibm.com/docs/services/watson?topic=watson-vcapServices#vcapServices
- https://cloud.ibm.com/docs/runtimes/nodejs?topic=Nodejs-getting-started#getting-started
- https://docs.cloudfoundry.org/buildpacks/node/node-tips.html
- https://cloud.ibm.com/docs/services/Cloudant/api?topic=cloudant-comparison-of-ibm-cloudant-and-couchdb-api-endpoints#comparison-of-ibm-cloudant-and-couchdb-api-endpoints


## References
- ibmcloud target --cf
- ibmcloud resource service-alias-create Cloudant-HafizMisron --instance-name Cloudant-HafizMisron
- ibmcloud service bind hafiz Cloudant-HafizMisron
- ibmcloud cf env hafiz
- ibmcloud service unbind hafiz Cloudant-HafizMisron