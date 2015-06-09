class FootprintSerializer < ActiveModel::Serializer

  attributes :id, :energy_source, :carbon_sources

  has_one :user

end