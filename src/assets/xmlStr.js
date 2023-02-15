export var xmlStr = `
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsd="http://www.w3.org/2001/XMLSchema" targetNamespace="http://flowable.org/modeler" exporter="Flowable Open Source Modeler" exporterVersion="1.1.1-SNAPSHOT">
  <process id="leave" name="请假" isExecutable="true">
    <startEvent id="startEvent1" />
    <userTask id="Activity_0cvpkas" name="提交人" flowable:assignee="1" flowable:skipExpression="1">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">false</modeler:initiator-can-complete>
        <flowable:assigneeType xmlns:flowable="http://flowable.org/bpmn">static</flowable:assigneeType>
      </extensionElements>
    </userTask>
    <sequenceFlow id="Flow_19ganz3" sourceRef="startEvent1" targetRef="Activity_0cvpkas" />
    <exclusiveGateway id="Gateway_00dt1rh" default="Flow_19c7cnd" />
    <sequenceFlow id="Flow_0u1gy6g" sourceRef="Activity_0cvpkas" targetRef="Gateway_00dt1rh" />
    <userTask id="Activity_0hd55ea" name="经理" flowable:assignee="10000">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">false</modeler:initiator-can-complete>
        <flowable:assigneeType xmlns:flowable="http://flowable.org/bpmn">idm</flowable:assigneeType>
        <flowable:idmAssignee xmlns:flowable="http://flowable.org/bpmn">[{"id":"1","name":"易烊千玺","code":"10000","sex":1,"mobile":"18689203258","companyId":"1","companyName":"中国石化","deptId":"27","deptName":"领导班子"}]</flowable:idmAssignee>
      </extensionElements>
    </userTask>
    <sequenceFlow id="Flow_19c7cnd" sourceRef="Gateway_00dt1rh" targetRef="Activity_0hd55ea" />
    <userTask id="Activity_1gtvl0c" name="总监" flowable:assignee="10000">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">false</modeler:initiator-can-complete>
        <flowable:assigneeType xmlns:flowable="http://flowable.org/bpmn">idm</flowable:assigneeType>
        <flowable:idmAssignee xmlns:flowable="http://flowable.org/bpmn">[{"id":"1","name":"易烊千玺","code":"10000","sex":1,"mobile":"18689203258","companyId":"1","companyName":"中国石化","deptId":"27","deptName":"领导班子"}]</flowable:idmAssignee>
      </extensionElements>
    </userTask>
    <sequenceFlow id="Flow_0xb2lye" name="大于三天" sourceRef="Gateway_00dt1rh" targetRef="Activity_1gtvl0c">
      <conditionExpression xsi:type="tFormalExpression">1</conditionExpression>
    </sequenceFlow>
    <exclusiveGateway id="Gateway_0nnziij" default="Flow_1p39s4o" />
    <sequenceFlow id="Flow_1n59p57" sourceRef="Activity_1gtvl0c" targetRef="Gateway_0nnziij" />
    <userTask id="Activity_0es20dx" name="总经理" flowable:assignee="10000">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">false</modeler:initiator-can-complete>
        <flowable:assigneeType xmlns:flowable="http://flowable.org/bpmn">idm</flowable:assigneeType>
        <flowable:idmAssignee xmlns:flowable="http://flowable.org/bpmn">[{"id":"1","name":"易烊千玺","code":"10000","sex":1,"mobile":"18689203258","companyId":"1","companyName":"中国石化","deptId":"27","deptName":"领导班子"}]</flowable:idmAssignee>
      </extensionElements>
    </userTask>
    <sequenceFlow id="Flow_1cf3dkv" name="大于五天" sourceRef="Gateway_0nnziij" targetRef="Activity_0es20dx">
      <conditionExpression xsi:type="tFormalExpression">1</conditionExpression>
    </sequenceFlow>
    <userTask id="Activity_1bdj24i" name="薪酬绩效岗、考勤岗" flowable:assignee="1">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">false</modeler:initiator-can-complete>
        <flowable:assigneeType xmlns:flowable="http://flowable.org/bpmn">static</flowable:assigneeType>
      </extensionElements>
      <multiInstanceLoopCharacteristics flowable:collection="1" flowable:elementVariable="user">
        <extensionElements />
      </multiInstanceLoopCharacteristics>
    </userTask>
    <sequenceFlow id="Flow_1p39s4o" sourceRef="Gateway_0nnziij" targetRef="Activity_1bdj24i" />
    <sequenceFlow id="Flow_1j9kaqz" sourceRef="Activity_0hd55ea" targetRef="Activity_1bdj24i" />
    <sequenceFlow id="Flow_1xu33s8" sourceRef="Activity_0es20dx" targetRef="Activity_1bdj24i" />
    <endEvent id="Event_0hbccv3" />
    <sequenceFlow id="Flow_10t15ej" sourceRef="Activity_1bdj24i" targetRef="Event_0hbccv3" />
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_leave">
    <bpmndi:BPMNPlane id="BPMNPlane_leave" bpmnElement="leave">
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_10t15ej" bpmnElement="Flow_10t15ej" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="18.0" flowable:targetDockerY="18.0">
        <omgdi:waypoint x="739.949999999863" y="120" />
        <omgdi:waypoint x="902" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_1xu33s8" bpmnElement="Flow_1xu33s8" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="479.94999999983094" y="120" />
        <omgdi:waypoint x="640" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_1j9kaqz" bpmnElement="Flow_1j9kaqz" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="249.95000000000002" y="0" />
        <omgdi:waypoint x="690" y="0" />
        <omgdi:waypoint x="690" y="80" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_1p39s4o" bpmnElement="Flow_1p39s4o" flowable:sourceDockerX="25.0" flowable:sourceDockerY="25.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="324.94680210202506" y="250" />
        <omgdi:waypoint x="690" y="250" />
        <omgdi:waypoint x="690" y="159.95" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_1cf3dkv" bpmnElement="Flow_1cf3dkv" flowable:sourceDockerX="25.0" flowable:sourceDockerY="25.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="300" y="225" />
        <omgdi:waypoint x="300" y="120" />
        <omgdi:waypoint x="380" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_1n59p57" bpmnElement="Flow_1n59p57" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="25.0" flowable:targetDockerY="25.0">
        <omgdi:waypoint x="249.95000000000002" y="250" />
        <omgdi:waypoint x="275" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_0xb2lye" bpmnElement="Flow_0xb2lye" flowable:sourceDockerX="25.0" flowable:sourceDockerY="25.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="100" y="154.93961282264777" />
        <omgdi:waypoint x="100" y="250" />
        <omgdi:waypoint x="150" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_19c7cnd" bpmnElement="Flow_19c7cnd" flowable:sourceDockerX="25.0" flowable:sourceDockerY="25.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="100" y="105" />
        <omgdi:waypoint x="100" y="0" />
        <omgdi:waypoint x="150" y="0" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_0u1gy6g" bpmnElement="Flow_0u1gy6g" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="25.0" flowable:targetDockerY="25.0">
        <omgdi:waypoint x="19.950000000000003" y="130" />
        <omgdi:waypoint x="75" y="130" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_19ganz3" bpmnElement="Flow_19ganz3" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="-135.05000126895308" y="130" />
        <omgdi:waypoint x="-80.00000000002208" y="130" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="BPMNShape_startEvent1" bpmnElement="startEvent1">
        <omgdc:Bounds x="-165" y="115" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Activity_0cvpkas" bpmnElement="Activity_0cvpkas">
        <omgdc:Bounds x="-80" y="90" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Gateway_00dt1rh" bpmnElement="Gateway_00dt1rh" isMarkerVisible="true">
        <omgdc:Bounds x="75" y="105" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Activity_0hd55ea" bpmnElement="Activity_0hd55ea">
        <omgdc:Bounds x="150" y="-40" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Activity_1gtvl0c" bpmnElement="Activity_1gtvl0c">
        <omgdc:Bounds x="150" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Gateway_0nnziij" bpmnElement="Gateway_0nnziij" isMarkerVisible="true">
        <omgdc:Bounds x="275" y="225" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Activity_0es20dx" bpmnElement="Activity_0es20dx">
        <omgdc:Bounds x="380" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Activity_1bdj24i" bpmnElement="Activity_1bdj24i">
        <omgdc:Bounds x="640" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Event_0hbccv3" bpmnElement="Event_0hbccv3">
        <omgdc:Bounds x="902" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`
